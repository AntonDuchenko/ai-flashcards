import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { EnglishLvl, Flashcard, Interest, Prisma, User } from 'generated/prisma';
import { DeckService } from 'src/deck/deck.service';
import { FlashcardsService } from 'src/flashcards/flashcards.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly deckService: DeckService,
    private readonly flashcardsService: FlashcardsService,
  ) {}

  async getUserByEmail(email: string) {
    return await this.prismaService.user.findUnique({
      where: { email },
    });
  }

  async getUserById(userId: string) {
    return this.prismaService.user.findUnique({
      where: { id: userId },
      include: {
        learnedWords: true,
        interests: true,
      },
    });
  }

  async getAllUsers() {
    return await this.prismaService.user.findMany({
      include: {
        interests: true,
        learnedWords: true,
        decks: true,
      },
    });
  }

  async createUser(email: string, password: string) {
    return this.prismaService.user.create({
      data: {
        email,
        password,
      },
    });
  }

  async updateUser(userId: string, data: Prisma.UserUpdateInput): Promise<User> {
    const updatedUser = await this.prismaService.user.update({
      where: { id: userId },
      data,
    });

    return updatedUser;
  }

  async setCorrectAnswer(
    userId: string,
    data: { wordId: string; correct: boolean; answerTime: number }[],
  ) {
    const user = await this.getUserById(userId);

    if (!user) throw new Error('User not found');
    const result = await Promise.allSettled(
      data.map((card) =>
        this.flashcardsService.reviewCard(card.wordId, card.answerTime, card.correct),
      ),
    );

    const fulfilledWords = result
      .filter((item): item is PromiseFulfilledResult<Flashcard> => item.status === 'fulfilled')
      .map((item) => item.value);

    for (const word of fulfilledWords) {
      await this.flashcardsService.updateFlashcard(word.id, word);
    }

    return { message: 'Aswers saved' };
    // return this.updateUser(userId, {
    //   learnedWords: {
    //     connect: learnedWordIds,
    //   },
    //   dailyComplete: true,
    //   daysStreak: user.daysStreak + 1,
    // });
  }

  async completeRegistration(
    userId: string,
    data: {
      englishLvl: EnglishLvl;
      interests: Interest[];
    },
  ) {
    const user = await this.getUserById(userId);

    if (user?.interests.length && user?.interests.length > 0)
      throw new Error('User intrerests already set');

    const interestIds = data.interests.map((interest) => ({
      id: interest.id,
    }));

    await this.updateUser(userId, {
      englishLvl: data.englishLvl,
      interests: {
        set: interestIds,
      },
    });

    await this.deckService.createDeck({
      userId,
      type: 'DAILY',
      englishLvl: data.englishLvl,
      interests: data.interests.map((interest) => interest.name),
      learnedWords: [],
    });
  }

  @Cron(CronExpression.EVERY_DAY_AT_5AM, {
    timeZone: 'Europe/Kyiv',
  })
  async createDecksForEverybody() {
    try {
      const users = await this.getAllUsers();

      for (const user of users) {
        if (user.englishLvl === null || user.interests.length === 0) continue;

        if (!user.dailyComplete) {
          await this.resetStreak(user.id);
          continue;
        }

        if (!user.decks) continue;
        const dailyDeck = user.decks.find((deck) => deck.type === 'DAILY');

        if (!dailyDeck) continue;

        await this.deckService.deleteDeck(dailyDeck.id);
        await this.deckService.createDeck({
          userId: user.id,
          type: 'DAILY',
          englishLvl: user.englishLvl,
          interests: user.interests.map((interest) => interest.name),
          learnedWords: user.learnedWords.map((card) => card.translation),
        });

        await this.deckService.createReapitingDeck(user.id, user.englishLvl);

        await this.updateUser(user.id, { dailyComplete: false });
      }

      console.log('✅ Daily decks created');
    } catch (error) {
      console.error('❌ Cron daily decks job failed:', error);
    }
  }

  async resetStreak(userId: string) {
    await this.updateUser(userId, { daysStreak: 0 });

    console.log('✅ Streak reseted for user', userId);
  }
}
