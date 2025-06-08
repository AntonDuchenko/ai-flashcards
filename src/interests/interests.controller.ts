import { Controller, Get } from '@nestjs/common';
import { InterestsService } from './interests.service';
import { Interest } from 'generated/prisma';

@Controller('interests')
export class InterestsController {
  constructor(private readonly interestsService: InterestsService) {}

  @Get()
  getAllInterests(): Promise<Interest[]> {
    return this.interestsService.findAll();
  }
}
