import { Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from '../api/dto/create-purchase.dto';
import { NovuService } from '../../novu/novu.service';

@Injectable()
export class PurchaseService {
  constructor(private readonly novuService: NovuService) {}

  async create(createPurchaseDto: CreatePurchaseDto): Promise<void> {
    const novu = this.novuService.getNovuInstance();

    const result = await novu.trigger({
      workflowId: process.env.WORKFLOW_ID as string,
      payload: {
        text: `You opened a position! ${createPurchaseDto.text}`,
      },
      to: {
        subscriberId: createPurchaseDto.subscriberId,
      },
    });

    // Handle the result
    console.log(result);
  }
}
