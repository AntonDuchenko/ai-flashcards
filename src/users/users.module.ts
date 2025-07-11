import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DeckModule } from 'src/deck/deck.module';
import { FlashcardsModule } from 'src/flashcards/flashcards.module';
import { CqrsModule } from '@nestjs/cqrs';
import { GetUserByEmailHandler } from './handlers/get-user-by-email.handler';
import { CreateUserHandler } from './handlers/create-user.handler';
import { UpdateRefreshTokenHandler } from './handlers/update-refresh-token.handler';

export const CommandHandlers = [GetUserByEmailHandler, CreateUserHandler, UpdateRefreshTokenHandler];

@Module({
  controllers: [UsersController],
  providers: [UsersService, ...CommandHandlers],
  exports: [UsersService],
  imports: [DeckModule, FlashcardsModule, CqrsModule],
})
export class UsersModule {}
