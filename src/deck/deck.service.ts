import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { FlashcardsService } from 'src/flashcards/flashcards.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DeckService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly flashcardsService: FlashcardsService,
  ) {}

  async createDeck(deck: Prisma.DeckCreateInput) {
    const flashcards = await this.flashcardsService.getRandomFlashcards(10);

    return this.prismaService.deck.create({
      data: {
        ...deck,
        flashcards: {
          connect: flashcards.filter((f) => f !== null).map((f) => ({ id: f!.id })),
        },
      },
      include: {
        flashcards: true,
      },
    });
  }

  getUserDecks(userId: string) {
    return this.prismaService.deck.findMany({
      where: {
        user: {
          id: userId,
        },
      },
      include: {
        flashcards: true,
      },
    });
  }
}
