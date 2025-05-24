import { Module } from '@nestjs/common';
import { WebClientFactoryService } from './services/web-client-factory.service';
import { WebClientService } from './services/web-client.service';

@Module({
  providers: [
    WebClientFactoryService,
    {
      provide: WebClientService,
      useFactory: (factory: WebClientFactoryService) => factory.create(),
      inject: [WebClientFactoryService],
    },
  ],
})
export class WebModule {}
