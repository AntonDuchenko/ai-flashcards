import { Injectable } from '@nestjs/common';
import { EnglishLvl, Interest, Prisma, User } from 'generated/prisma';
import { DeckService } from 'src/deck/deck.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService,
    private readonly deckService: DeckService
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
    return await this.prismaService.user.findMany();
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

    return this.updateUser(userId, { learnedWords: [...user.learnedWords, ...learnedWords] });
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
}
