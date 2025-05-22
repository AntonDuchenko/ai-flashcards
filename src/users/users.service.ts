import { Injectable } from '@nestjs/common';
import { Prisma, User } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUserByEmail(email: string) {
    return await this.prismaService.user.findUnique({
      where: { email },
    });
  }

  async getProfile(userId: string) {
    return await this.prismaService.user.findUnique({
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
}
