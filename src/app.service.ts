import { Injectable } from '@nestjs/common';
import { DevConfigService } from './common/providers/DevConfigService';

@Injectable()
export class AppService {
  constructor(private readonly devconfigService: DevConfigService) {}

  getHello(): string {
    return 'Hello World!' + this.devconfigService.getDBHOST();
  }
}
