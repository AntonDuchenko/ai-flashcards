import { Module } from '@nestjs/common';
import { DeckService } from './deck.service';
import { DeckController } from './deck.controller';
import { FlashcardsModule } from 'src/flashcards/flashcards.module';

@Module({
  controllers: [DeckController],
  providers: [DeckService],
  imports: [FlashcardsModule],
})
export class DeckModule {}
