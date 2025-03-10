import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { NovuModule } from './novu/novu.module';
import { PurchaseModule } from './purchase/purchase.module';

@Module({
  imports: [NovuModule, UsersModule, PurchaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
