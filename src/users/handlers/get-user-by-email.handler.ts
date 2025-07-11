import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { GetUserByEmailCommand } from '../commands';
import { UsersService } from '../users.service';

@CommandHandler(GetUserByEmailCommand)
export class GetUserByEmailHandler implements ICommandHandler<GetUserByEmailCommand> {
  constructor(private readonly usersService: UsersService) {}

  async execute(command: GetUserByEmailCommand) {
    return this.usersService.getUserByEmail(command.email);
  }
}
