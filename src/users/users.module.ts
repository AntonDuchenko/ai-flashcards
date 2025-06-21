import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DeckModule } from 'src/deck/deck.module';
import { FlashcardsModule } from 'src/flashcards/flashcards.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
  imports: [DeckModule, FlashcardsModule],
})
export class UsersModule {}
