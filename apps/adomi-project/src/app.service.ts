import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('POLYGON_SERVICE') private client: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }

  getSum(): string {
    this.client.emit('sum', { numbers: [1, 2, 3] });
    return 'Hello World!';
  }
}
