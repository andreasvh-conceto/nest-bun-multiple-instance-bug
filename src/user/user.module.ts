import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { WebModule } from 'src/web/web.module';

@Module({
  providers: [UserService],
  imports: [WebModule],
})
export class UserModule {}
