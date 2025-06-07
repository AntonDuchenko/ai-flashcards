import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { OpenAiService } from 'src/open-ai/open-ai.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class DeckService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly openAiService: OpenAiService,
    private readonly usersService: UsersService,
  ) {}

  async createDeck(
    userId: string,
    data: Omit<Prisma.DeckCreateInput, 'title' | 'flashcards' | 'user'>,
  ) {
    const user = await this.usersService.getUserById(userId);

    if (!user) throw new Error('User not found');

    const flashcards = await this.openAiService.getRandomFlashcards(
      data.englishLvl,
      data.topic,
      user.learnedWords,
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
