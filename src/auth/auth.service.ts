import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthResponse } from './types/auth.response.type';
import { UsersService } from 'src/users/users.service';
import { TokensService } from 'src/tokens/tokens.service';
import { compare } from 'bcryptjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly tokenService: TokensService,
    private readonly configService: ConfigService,
  ) {}

  getCookieOptions() {
    return {
      httpOnly: true,
      secure: this.configService.getOrThrow<boolean>('COOKIE_SECURE'),
      sameSite: this.configService.getOrThrow<'lax' | 'none' | 'strict'>('COOKIE_SAMESITE'),
      domain: 'ai-flashcard-frontend.vercel.app',
    };
  }

  async login(email: string, password: string): Promise<AuthResponse> {
    const currentUser = await this.usersService.getUserByEmail(email);

    if (!currentUser) {
      throw new NotFoundException('User not found');
    }

    const isPasswordValid = await compare(password, currentUser.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const tokens = await this.tokenService.getTokens({
      userId: currentUser.id,
    });

    return tokens;
  }

  async register(email: string, password: string): Promise<AuthResponse> {
    const existingUser = await this.usersService.getUserByEmail(email);

    if (existingUser) {
      throw new ConflictException('User already exists');
    }

    const hashedPassword = await this.tokenService.hashData(password);

    const newUser = await this.usersService.createUser(email, hashedPassword);

    const tokens = await this.tokenService.getTokens({
      userId: newUser.id,
    });

    return tokens;
  }

  async logout(userId: string): Promise<void> {
    await this.tokenService.updateRefreshToken(userId, null);
  }
}
