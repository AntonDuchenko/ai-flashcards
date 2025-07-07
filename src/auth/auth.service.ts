import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
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
      maxAge: 1000 * 60 * 60 * 24 * 7,
    };
  }

  async login(email: string, password: string) {
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

  async register(email: string, password: string) {
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
