import { Controller, Get } from '@nestjs/common';
import { InterestsService } from './interests.service';
import { Interest } from 'generated/prisma';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('interests')
export class InterestsController {
  constructor(private readonly interestsService: InterestsService) {}

  @ApiOperation({ summary: 'Get all interests' })
  @ApiResponse({ schema: { $ref: 'Interest' }, isArray: true })
  @Get()
  getAllInterests(): Promise<Interest[]> {
    return this.interestsService.findAll();
  }
}
