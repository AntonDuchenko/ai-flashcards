import { Injectable } from '@nestjs/common';
import { DeckType, EnglishLvl, Prisma } from 'generated/prisma';
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
    type: DeckType;
    interests: string[];
    learnedWords: string[];
  }) {
    const deck = await this.prismaService.deck.create({
      data: {
        englishLvl: data.englishLvl,
        title: 'Daily deck',
        type: data.type,
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
      include: {
        flashcards: true,
      },
    });
  }

  async createReapitingDeck(userId: string, englishLvl: EnglishLvl, limit = 15) {
    const now = new Date();

    // 1️⃣ Найти или создать колоду типа REPEATING
    let deck = await this.prismaService.deck.findFirst({
      where: { userId, type: 'REPEATING' },
    });

    if (!deck) {
      deck = await this.prismaService.deck.create({
        data: {
          title: 'Repeating',
          type: 'REPEATING',
          userId,
          englishLvl,
        },
      });
    }

    // 2️⃣ Очистить колоду от предыдущих карточек
    await this.prismaService.flashcard.updateMany({
      where: {
        userId,
        deckId: deck.id,
      },
      data: {
        deckId: null,
      },
    });

    // 3️⃣ Выбрать до 15 самых просроченных карточек
    const overdueCards = await this.prismaService.flashcard.findMany({
      where: {
        userId,
        dueDate: { lte: now },
        deckId: null, // только те, которые ещё не в колоде
      },
      orderBy: {
        dueDate: 'asc',
      },
      take: limit,
      select: {
        id: true,
      },
    });

    // 4️⃣ Назначить их в REPEATING-деку
    if (overdueCards.length > 0) {
      await this.prismaService.flashcard.updateMany({
        where: {
          id: { in: overdueCards.map((card) => card.id) },
        },
        data: {
          deckId: deck.id,
        },
      });
    }

    return deck;
  }
}
