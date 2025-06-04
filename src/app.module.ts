import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { RefreshTokenMiddleware } from './common/middlewares';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { TokensModule } from './tokens/tokens.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { FlashcardsModule } from './flashcards/flashcards.module';
import { DeckModule } from './deck/deck.module';

@Module({
  imports: [
    JwtModule.register({}),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    TokensModule,
    UsersModule,
    PrismaModule,
    FlashcardsModule,
    DeckModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RefreshTokenMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
