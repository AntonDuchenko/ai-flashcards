import { Module } from '@nestjs/common';
import { TokensService } from './tokens.service';
import { TokensController } from './tokens.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [TokensController],
  providers: [TokensService],
  exports: [TokensService],
  imports: [UsersModule, JwtModule],
})
export class TokensModule {}
