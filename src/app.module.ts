import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { NovuModule } from './novu/novu.module';

@Module({
  imports: [NovuModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
