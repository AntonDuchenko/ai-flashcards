import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRoot() {
    return {
      status: 'OK',
      message: 'NestJS backend is running.',
    };
  }
}