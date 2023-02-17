import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as csurf from 'csurf';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(
    {
      origin: ['http://localhost:3001', 'http://localhost:3002'],
    }
  );
  // app.use(csurf());
  app.use(helmet());
  await app.listen(3000);
}
bootstrap();
