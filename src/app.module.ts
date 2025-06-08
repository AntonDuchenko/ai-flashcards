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
import { OpenAiModule } from './open-ai/open-ai.module';
import { InterestsModule } from './interests/interests.module';
import * as Joi from 'joi';

@Module({
  imports: [
    JwtModule.register({}),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      ignoreEnvFile: false,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('development', 'production').required().default('development'),
        COOKIE_SECURE: Joi.boolean().truthy('true').falsy('false').required(),
        COOKIE_SAMESITE: Joi.string().valid('lax', 'none', 'strict').required(),
        FRONTEND_URL: Joi.string().uri().required(),
        PORT: Joi.number().default(3000),
      }),
    }),
    AuthModule,
    TokensModule,
    UsersModule,
    PrismaModule,
    FlashcardsModule,
    DeckModule,
    OpenAiModule,
    InterestsModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RefreshTokenMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
