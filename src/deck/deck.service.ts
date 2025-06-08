import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { EnglishLvl, Prisma } from 'generated/prisma';
import { OpenAiService } from 'src/open-ai/open-ai.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class DeckService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly openAiService: OpenAiService,
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_5AM)
  async createDeck(data: {
    userId: string;
    englishLvl: EnglishLvl;
    interests: string[];
    learnedWords: string[];
  }) {
    const flashcards = await this.openAiService.getRandomFlashcards(
      data.englishLvl,
      data.interests,
      data.learnedWords,
    );

    return this.prismaService.deck.create({
      data: {
        englishLvl: data.englishLvl,
        user: {
          connect: { id: data.userId },
        },
        title: 'Daily deck',
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
