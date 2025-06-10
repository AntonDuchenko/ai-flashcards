import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { ConfigService } from '@nestjs/config';
import { randomUUID } from 'crypto';

if (!globalThis.crypto) {
  globalThis.crypto = {
    randomUUID,
  } as Crypto;
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn'],
  });

  const config = app.get(ConfigService);

  const nodeEnv = config.getOrThrow<'development' | 'production'>('NODE_ENV');
  const frontendUrl = config.getOrThrow<string>('FRONTEND_URL');
  const port = config.getOrThrow<number>('PORT');

  app.enableCors({
    origin: frontendUrl,
    credentials: true,
  });

  app.use(cookieParser());
  app.use(helmet());

  await app.listen(port);
  console.log(`🚀 Server running at http://localhost:${port} (${nodeEnv})`);
}
bootstrap();
