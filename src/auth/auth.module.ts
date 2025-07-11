import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { CqrsModule } from '@nestjs/cqrs';
import { RegisterUserHandler } from './handlers';
import { LoginUserHandler } from './handlers';
import { LogoutUserHandler } from './handlers';

const CommandHandlers = [RegisterUserHandler, LoginUserHandler, LogoutUserHandler];

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, ...CommandHandlers],
  imports: [CqrsModule],
})
export class AuthModule {}
