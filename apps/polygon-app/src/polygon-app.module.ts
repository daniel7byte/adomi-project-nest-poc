import { Module } from '@nestjs/common';
import { PolygonAppController } from './polygon-app.controller';
import { PolygonAppService } from './polygon-app.service';
import { MathController } from './math/math.controller';

@Module({
  imports: [],
  controllers: [PolygonAppController, MathController],
  providers: [PolygonAppService],
})
export class PolygonAppModule {}
