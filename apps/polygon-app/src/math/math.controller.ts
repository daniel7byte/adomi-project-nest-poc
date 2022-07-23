import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller('math')
export class MathController {
  @EventPattern('sum')
  async handleUserCreated(data: any) {
    console.log(data);
  }
}
