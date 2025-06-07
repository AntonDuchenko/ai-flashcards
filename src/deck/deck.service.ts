import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { FlashcardsService } from 'src/flashcards/flashcards.service';
import { OpenAiService } from 'src/open-ai/open-ai.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DeckService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly flashcardsService: FlashcardsService,
    private readonly openAiService: OpenAiService,
  ) {}

  async createDeck(
    userId: string,
    data: Omit<Prisma.DeckCreateInput, 'title' | 'flashcards' | 'user'>,
  ) {
    const flashcards = await this.openAiService.getRandomFlashcards(
      data.englishLvl,
      data.topic,
      [],
    );

    return this.prismaService.deck.create({
      data: {
        ...data,
        user: {
          connect: { id: userId },
        },
        title: 'New Deck',
        flashcards,
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
    });
  }
}
