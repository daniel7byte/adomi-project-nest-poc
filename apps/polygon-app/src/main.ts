import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { PolygonAppModule } from './polygon-app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PolygonAppModule,
    {
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379,
      },
    },
  );
  await app.listen();
}
bootstrap();
