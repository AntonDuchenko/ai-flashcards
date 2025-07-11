import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { HashPasswordCommand } from '../commands';
import { TokensService } from '../tokens.service';

@CommandHandler(HashPasswordCommand)
export class HashPasswordHandler implements ICommandHandler<HashPasswordCommand> {
  constructor(private readonly tokenService: TokensService) {}

  async execute(command: HashPasswordCommand) {
    return this.tokenService.hashData(command.data);
  }
}
