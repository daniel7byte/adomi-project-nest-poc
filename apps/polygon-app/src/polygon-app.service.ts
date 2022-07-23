import { Injectable } from '@nestjs/common';

@Injectable()
export class PolygonAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
