import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Get,
  Param,
  Put,
  Query,
} from '@nestjs/common';
import { UsersService } from '../app/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { SubscriberResponseDto } from '@novu/api/models/components';
import { GetNotificationsQueryParams } from './dto/get-notifications.dto';
import { ApiTags } from '@nestjs/swagger';
import { Notification } from '../app/transformers/notification.transformer';
import { GetNotificationsSwagger } from './swagger/get-notifications.swagger';
import { GetUnseenCountSwagger } from './swagger/get-unseen-count.swagger';
import { CreateSubscriberSwagger } from './swagger/create-subscriber.swagger';
import { MarkAsSeenSwagger } from './swagger/mark-as-seen.swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id/notifications')
  @GetNotificationsSwagger()
  async getSubscribersNotifications(
    @Param('id') id: string,
    @Query() query: GetNotificationsQueryParams,
  ): Promise<{
    data: Notification[];
    page: number;
    totalCount: number;
    pageSize: number;
    hasMore: boolean;
  }> {
    const { page = 0, limit = 10, read = null, seen = null } = query;
    return this.usersService.getNotificationsByUserId(
      id,
      page,
      limit,
      read,
      seen,
    );
  }

  @Get(':id/notifications/unseen')
  @GetUnseenCountSwagger()
  async getUnseenNotificationsCount(
    @Param('id') id: string,
  ): Promise<{ count: number }> {
    return this.usersService.getUnseenNotificationsCount(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @CreateSubscriberSwagger()
  async createSubscriber(
    @Body() createUserDto: CreateUserDto,
  ): Promise<SubscriberResponseDto> {
    return this.usersService.createSubscriber(createUserDto);
  }

  @Put(':id/notifications/:notificationId')
  @MarkAsSeenSwagger()
  async setNotificationAsSeen(
    @Param('id') id: string,
    @Param('notificationId') notificationId: string,
  ): Promise<void> {
    return this.usersService.setNotificationAsSeen(id, notificationId);
  }
}
