import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FlashcardsService {
  constructor(private readonly prismaService: PrismaService) {}

  async createFlashcard(userId: string, data: { word: string; translation: string }) {
    return await this.prismaService.flashcard.create({
      data: {
        user: {
          connect: { id: userId },
        },
        ...data,
      },
    });
  }

  async createManyFlashcards(
    data: {
      userId: string;
      deckId: string;
      word: string;
      translation: string;
    }[],
  ) {
    return this.prismaService.flashcard.createMany({ data });
  }

  async getAllFlashcards() {
    return await this.prismaService.flashcard.findMany();
  }

  async getRandomFlashcards(count = 10) {
    const total = await this.prismaService.flashcard.count();

    if (total <= count) {
      return this.prismaService.flashcard.findMany();
    }

    const randomOffsets = new Set<number>();
    while (randomOffsets.size < count) {
      randomOffsets.add(Math.floor(Math.random() * total));
    }

    const promises = [...randomOffsets].map((offset) =>
      this.prismaService.flashcard.findFirst({ skip: offset }),
    );

    return Promise.all(promises);
  }
}
