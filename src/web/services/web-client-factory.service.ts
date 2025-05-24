import { Injectable } from '@nestjs/common';
import { WebClientService } from './web-client.service';

@Injectable()
export class WebClientFactoryService {
  create() {
    return new WebClientService();
  }
}
