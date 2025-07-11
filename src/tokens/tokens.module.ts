import { Module } from '@nestjs/common';
import { TokensService } from './tokens.service';
import { TokensController } from './tokens.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { GenerateTokensHandler } from './handlers/generate-token.handler';
import { HashPasswordHandler } from './handlers/hash-password.hanlder';

export const CommandHandlers = [GenerateTokensHandler, HashPasswordHandler];
@Module({
  controllers: [TokensController],
  providers: [TokensService, ...CommandHandlers],
  exports: [TokensService],
  imports: [UsersModule, JwtModule],
})
export class TokensModule {}
