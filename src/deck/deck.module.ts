import { Module } from '@nestjs/common';
import { DeckService } from './deck.service';
import { DeckController } from './deck.controller';
import { FlashcardsModule } from 'src/flashcards/flashcards.module';
import { OpenAiModule } from 'src/open-ai/open-ai.module';

@Module({
  controllers: [DeckController],
  providers: [DeckService],
  imports: [FlashcardsModule, OpenAiModule],
})
export class DeckModule {}
