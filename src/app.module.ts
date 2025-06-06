import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { WebModule } from './web/web.module';

@Module({
  imports: [UserModule, WebModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
