import { Controller, Get } from '@nestjs/common';
import { PolygonAppService } from './polygon-app.service';

@Controller()
export class PolygonAppController {
  constructor(private readonly polygonAppService: PolygonAppService) {}

  @Get()
  getHello(): string {
    return this.polygonAppService.getHello();
  }
}
