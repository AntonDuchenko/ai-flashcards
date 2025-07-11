import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { ConfigService } from '@nestjs/config';
import { randomUUID } from 'crypto';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

if (!globalThis.crypto) {
  globalThis.crypto = {
    randomUUID,
  } as Crypto;
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn'],
  });

  const config = app.get(ConfigService);

  const nodeEnv = config.getOrThrow<'development' | 'production'>('NODE_ENV');
  const frontendUrl = config.getOrThrow<string>('FRONTEND_URL');
  const port = config.getOrThrow<number>('PORT');

  const swaggerConfig = new DocumentBuilder().setTitle('AI flashcards').setVersion('1.0').build();
  const documentFactory = () => SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, documentFactory);

  app.enableCors({
    origin: frontendUrl,
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        const errors = {};
        validationErrors.forEach((error) => {
          errors[error.property] = error.constraints ? Object.values(error.constraints) : [];
        });

        return new BadRequestException({
          error: {
            message: 'Validation Error',
            errors,
          },
          status: 400,
        });
      },
    }),
  );

  app.use(cookieParser());
  app.use(helmet());

  await app.listen(port);
  console.log(`🚀 Server running at http://localhost:${port} (${nodeEnv})`);
}
bootstrap();
