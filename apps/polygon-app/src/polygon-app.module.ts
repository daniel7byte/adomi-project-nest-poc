import { Module } from '@nestjs/common';
import { PolygonAppController } from './polygon-app.controller';
import { PolygonAppService } from './polygon-app.service';

@Module({
  imports: [],
  controllers: [PolygonAppController],
  providers: [PolygonAppService],
})
export class PolygonAppModule {}
