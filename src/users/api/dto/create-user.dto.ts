import { IsString, IsNotEmpty } from 'class-validator';
import { Trim } from '../decorator/trim';

export class CreateUserDto {
  @IsString()
  @Trim()
  @IsNotEmpty()
  subscriberId: string;
}
