import { Injectable } from '@nestjs/common';
import { Interest } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InterestsService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<Interest[]> {
    return this.prismaService.interest.findMany();
  }
}
