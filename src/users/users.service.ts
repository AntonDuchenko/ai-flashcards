import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { EnglishLvl, Interest, Prisma, User } from 'generated/prisma';
import { DeckService } from 'src/deck/deck.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly deckService: DeckService,
  ) {}

  async getUserByEmail(email: string) {
    return await this.prismaService.user.findUnique({
      where: { email },
    });
  }

  async getUserById(userId: string) {
    return this.prismaService.user.findUnique({
      where: { id: userId },
    });
  }

  async getAllUsers() {
    return await this.prismaService.user.findMany({
      include: {
        interests: true,
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
    data: { englishWord: string; answersStatus: boolean }[],
  ): Promise<User> {
    const user = await this.getUserById(userId);

    if (!user) throw new Error('User not found');

    const learnedWords = data.reduce<string[]>((acc, { englishWord, answersStatus }) => {
      if (answersStatus) {
        return [...acc, englishWord];
      } else {
        return acc;
      }
    }, []);

    return this.updateUser(userId, {
      learnedWords: [...user.learnedWords, ...learnedWords],
      dailyComplete: true,
      daysStreak: user.daysStreak + 1,
    });
  }

  async completeRegistration(
    userId: string,
    data: {
      englishLvl: EnglishLvl;
      interests: Interest[];
    },
  ) {
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
      englishLvl: data.englishLvl,
      interests: data.interests.map((interest) => interest.name),
      learnedWords: [],
    });
  }

  @Cron(CronExpression.EVERY_DAY_AT_5AM)
  async createDailyDeckForEverybody() {
    const users = await this.getAllUsers();

    for (const user of users) {
      if (user.englishLvl === null || user.interests.length === 0) continue;

      await this.deckService.createDeck({
        userId: user.id,
        englishLvl: user.englishLvl,
        interests: user.interests.map((interest) => interest.name),
        learnedWords: user.learnedWords,
      });

      await this.updateUser(user.id, { dailyComplete: false });
    }
  }

  @Cron(CronExpression.EVERY_DAY_AT_4AM)
  async resetStreak() {
    const users = await this.getAllUsers();

    for (const user of users) {
      if (!user.dailyComplete) continue;
      await this.updateUser(user.id, { daysStreak: 0 });
    }
  }
}
