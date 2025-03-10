import { Module } from '@nestjs/common';
import { PurchaseService } from './app/purchase.service';
import { PurchaseController } from './api/purchase.controller';

@Module({
  controllers: [PurchaseController],
  providers: [PurchaseService],
})
export class PurchaseModule {}
