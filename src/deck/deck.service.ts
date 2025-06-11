import { Injectable } from '@nestjs/common';
import { EnglishLvl, Prisma } from 'generated/prisma';
import { FlashcardsService } from 'src/flashcards/flashcards.service';
import { OpenAiService } from 'src/open-ai/open-ai.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DeckService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly openAiService: OpenAiService,
    private readonly flashcardsService: FlashcardsService,
  ) {}

  async createDeck(data: {
    userId: string;
    englishLvl: EnglishLvl;
    interests: string[];
    learnedWords: string[];
  }) {
    const deck = await this.prismaService.deck.create({
      data: {
        englishLvl: data.englishLvl,
        title: 'Daily deck',
        user: {
          connect: { id: data.userId },
        },
      },
    });

    const aiFlashcards = await this.openAiService.getRandomFlashcards(
      data.englishLvl,
      data.interests,
      data.learnedWords,
    );

    const flashcardsData = aiFlashcards.map((card) => ({
      ...card,
      userId: data.userId,
      deckId: deck.id,
    }));

    await this.flashcardsService.createManyFlashcards(flashcardsData);

    return deck;
  }

  async deleteDeck(deckId: string) {
    return this.prismaService.deck.delete({ where: { id: deckId } });
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
