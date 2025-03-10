import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../api/dto/create-user.dto';
import { NovuService } from '../../novu/novu.service';
import { NotificationTransformer } from './transformers/notification.transformer';
import { SubscriberResponseDto } from '@novu/api/models/components';
import { buildQueryString } from '../../shared/utils/url.utils';

@Injectable()
export class UsersService {
  constructor(private readonly novuService: NovuService) {}

  async createSubscriber(
    createUserDto: CreateUserDto,
  ): Promise<SubscriberResponseDto> {
    const result = await this.novuService.getNovuInstance().subscribers.create({
      subscriberId: createUserDto.subscriberId,
    });

    return result.result;
  }

  async getNotificationsByUserId(
    subscriberId: string,
    page: number,
    limit: number,
    read: boolean | null,
    seen: boolean | null,
  ) {
    // SDK validation is failing (internal Novu error), hence, using raw fetch
    // TODO: Remove once SDK fix is released: https://github.com/novu/novu/pull/1188
    const queryString = buildQueryString({ page, limit, read, seen });

    const response = await fetch(
      `https://api.novu.co/v1/subscribers/${subscriberId}/notifications/feed${queryString}`,
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

  async getUnseenNotificationsCount(
    subscriberId: string,
  ): Promise<{ count: number }> {
    const result = await this.novuService
      .getNovuInstance()
      .subscribers.notifications.unseenCount({
        subscriberId,
      });

    return result.result;
  }

  async setNotificationAsSeen(
    subscriberId: string,
    notificationId: string,
  ): Promise<void> {
    // TODO: undocumented API method!
    await fetch(
      `https://api.novu.co/v1/subscribers/${subscriberId}/messages/markAs`,
      {
        method: 'POST',
        headers: {
          Authorization: `ApiKey ${process.env.NOVU_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messageId: notificationId,
          mark: {
            seen: true,
            read: true,
          },
        }),
      },
    );
  }
}
