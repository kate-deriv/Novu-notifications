import { Controller, Post, Body } from '@nestjs/common';
import { PurchaseService } from '../app/purchase.service';
import { CreatePurchaseDto } from '../api/dto/create-purchase.dto';
import { CreatePurchaseSwagger } from './swagger/create-purchase.swagger';

@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Post()
  @CreatePurchaseSwagger()
  async create(@Body() createPurchaseDto: CreatePurchaseDto): Promise<void> {
    return this.purchaseService.create(createPurchaseDto);
  }
}
