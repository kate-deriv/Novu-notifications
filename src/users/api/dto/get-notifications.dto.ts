import { Type } from 'class-transformer';
import { ValidateIf, IsBoolean, IsInt, Min, Max } from 'class-validator';

export class GetNotificationsQueryParams {
  @ValidateIf((o: Record<string, string>) => typeof o.page !== 'undefined')
  @IsInt()
  @Min(0)
  @Type(() => Number)
  page: number;

  @ValidateIf((o: Record<string, string>) => typeof o.limit !== 'undefined')
  @IsInt()
  @Min(1)
  @Max(100)
  @Type(() => Number)
  limit: number;

  read: boolean;

  seen: boolean;
}
