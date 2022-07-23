import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { PolygonAppModule } from './polygon-app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PolygonAppModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();
