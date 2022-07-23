import { NestFactory } from '@nestjs/core';
import { PolygonAppModule } from './polygon-app.module';

async function bootstrap() {
  const app = await NestFactory.create(PolygonAppModule);
  await app.listen(3001);
}
bootstrap();
