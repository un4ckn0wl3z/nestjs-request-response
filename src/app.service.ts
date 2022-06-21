import { Injectable, Logger } from '@nestjs/common';
import { RequestService } from './request.service';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(private readonly requestServer: RequestService){}

  getHello(): string {
    const userId = this.requestServer.getUserId()
    this.logger.log(userId)
    return 'Hello World!';
  }
}
