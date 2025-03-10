import { IsNotEmpty, IsString } from 'class-validator';
import { Trim } from '../../../users/api/decorator/trim';

export class CreatePurchaseDto {
  @IsString()
  @Trim()
  @IsNotEmpty()
  subscriberId: string;

  @IsString()
  @Trim()
  @IsNotEmpty()
  text: string;
}
