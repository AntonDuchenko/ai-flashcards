import { CommandBus, CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LogoutUserCommand } from '../commands/logout-user.command';
import { UpdateRefreshTokenCommand } from 'src/users/commands';

@CommandHandler(LogoutUserCommand)
export class LogoutUserHandler implements ICommandHandler<LogoutUserCommand> {
  constructor(private readonly commandBus: CommandBus) {}

  async execute(command: LogoutUserCommand) {
    const { userId } = command;
    await this.commandBus.execute(new UpdateRefreshTokenCommand(userId, null));
  }
}
