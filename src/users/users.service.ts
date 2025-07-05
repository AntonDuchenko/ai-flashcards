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

    if (user.isDailyComplete) return { message: 'Daily already completed' };

    const results = await Promise.allSettled(
      data.map((card) =>
        this.flashcardsService.reviewCard(card.wordId, card.answerTime, card.correct),
      ),
    );

    const fulfilled = results.filter(
      (r): r is PromiseFulfilledResult<Flashcard> => r.status === 'fulfilled',
    );
    const failed = results.filter((r) => r.status === 'rejected');

    for (const card of fulfilled) {
      await this.flashcardsService.updateFlashcard(card.value.id, card.value);
    }

    if (failed.length > 0) {
      console.warn(
        'Some flashcards failed to update:',
        failed.map((f) => f.reason),
      );
    }

    if (fulfilled.length > 0) {
      return this.updateUser(userId, {
        isDailyComplete: true,
        daysStreak: user.daysStreak + 1,
      });
    }

    return { message: 'No updates performed' };
  }

  async setReviewAnswer(
    userId: string,
    data: { wordId: string; correct: boolean; answerTime: number }[],
  ) {
    const user = await this.getUserById(userId);
    if (!user) throw new Error('User not found');

    if (user.isAnsweredInRepeating) return { message: 'User already answered' };

    const results = await Promise.allSettled(
      data.map((card) =>
        this.flashcardsService.reviewRepeatingCard(card.wordId, card.answerTime, card.correct),
      ),
    );

    const fulfilled = results.filter(
      (r): r is PromiseFulfilledResult<Flashcard> => r.status === 'fulfilled',
    );
    const failed = results.filter((r) => r.status === 'rejected');

    for (const card of fulfilled) {
      await this.flashcardsService.updateFlashcard(card.value.id, card.value);
    }

    if (failed.length > 0) {
      console.warn(
        'Some review cards failed to update:',
        failed.map((f) => f.reason),
      );
    }

    if (fulfilled.length > 0) {
      return this.updateUser(userId, { isAnsweredInRepeating: true });
    }

    return { updated: fulfilled.length, failed: failed.length };
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

        if (!user.isDailyComplete) {
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

        await this.deckService.createRepeatingDeck(user.id, user.englishLvl);

        await this.updateUser(user.id, { isDailyComplete: false });
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
