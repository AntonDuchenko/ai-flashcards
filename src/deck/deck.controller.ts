import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { DeckService } from './deck.service';
import { AccessTokenGuard } from 'src/common/guards';

@UseGuards(AccessTokenGuard)
@Controller('deck')
export class DeckController {
  constructor(private readonly deckService: DeckService) {}

  @Get()
  getUserDecks(@Req() req: Request & { user: { sub: string } }) {
    return this.deckService.getUserDecks(req.user.sub);
  }

  @Post()
  createDeck(@Req() req: Request & { user: { sub: string } }) {
    return this.deckService.createDeck({
      title: 'New Deck',
      user: {
        connect: { id: req.user.sub },
      },
    });
  }
}
