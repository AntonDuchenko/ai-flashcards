import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger,
  BadRequestException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Prisma } from 'generated/prisma';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  constructor() {}

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = 500;
    let message = 'Internal server error';
    let errors = null;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();

      if (
        exception instanceof BadRequestException &&
        typeof exceptionResponse === 'object'
      ) {
        const exceptionBody = exceptionResponse as any;

        message = exceptionBody.message || exceptionBody.error;
        errors = exceptionBody.errors || exceptionBody.message;
      } else {
        message = exception.message;
      }
    } else if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      if (exception.code === 'P2002') {
        status = HttpStatus.CONFLICT;
        message = 'Conflict: unique constraint failed';
      } else {
        status = HttpStatus.BAD_REQUEST;
        message = 'Database error';
      }
    } else if (exception instanceof Prisma.PrismaClientValidationError) {
      status = HttpStatus.BAD_REQUEST;

      const errorMessage = exception.message;
      const match = errorMessage.match(
        /Invalid value for argument `(\w+)`\. Expected (\w+)/,
      );

      if (match) {
        const [_, fieldName, expectedType] = match;
        message = `Invalid value for field '${fieldName}'. Expected type: ${expectedType}`;
      } else {
        message = 'Invalid input data for database operation';
      }
    } else if (exception instanceof Error) {
      message = exception.message;
    }

    this.logger.error(`Error on ${request.method} ${request.url}`, {
      error: exception instanceof Error ? exception.stack : String(exception),
      response: {
        statusCode: status,
        message,
        errors,
        path: request.url,
      },
    });

    const responseBody = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
    };

    if (errors) {
      Object.assign(responseBody, { errors });
    }

    response.status(status).json(responseBody);
  }
}
