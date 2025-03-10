import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../api/dto/create-user.dto';
import { NovuService } from '../../novu/novu.service';
import { NotificationTransformer } from './transformers/notification.transformer';

@Injectable()
export class UsersService {
  constructor(private readonly novuService: NovuService) {}

  async createSubscriber(createUserDto: CreateUserDto) {
    const result = await this.novuService.getNovuInstance().subscribers.create({
      subscriberId: createUserDto.subscriberId,
    });

    return result.result;
  }

  async getNotificationsByUserId(subscriberId: string) {
    const response = await fetch(
      `https://api.novu.co/v1/subscribers/${subscriberId}/notifications/feed`,
      {
        method: 'GET',
        headers: {
          Authorization: `ApiKey ${process.env.NOVU_API_KEY}`,
          'Content-Type': 'application/json',
        },
      },
    );

    const result = await response.json();
    
    return {
      ...result,
      data: NotificationTransformer.transformMany(result.data),
    };
  }
}
