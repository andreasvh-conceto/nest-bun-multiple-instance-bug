import { Logger } from '@nestjs/common';

export class WebClientService {
  private readonly logger = new Logger(WebClientService.name);

  constructor() {
    this.logger.warn('instantiating WebClientService');
  }
}
