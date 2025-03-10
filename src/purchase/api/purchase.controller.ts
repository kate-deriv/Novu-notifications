import { Controller, Post, Body } from '@nestjs/common';
import { PurchaseService } from '../app/purchase.service';
import { CreatePurchaseDto } from '../api/dto/create-purchase.dto';

@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Post()
  async create(@Body() createPurchaseDto: CreatePurchaseDto): Promise<void> {
    return this.purchaseService.create(createPurchaseDto);
  }
}
