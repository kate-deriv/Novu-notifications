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

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id/notifications')
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
  async getUnseenNotificationsCount(
    @Param('id') id: string,
  ): Promise<{ count: number }> {
    return this.usersService.getUnseenNotificationsCount(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createSubscriber(
    @Body() createUserDto: CreateUserDto,
  ): Promise<SubscriberResponseDto> {
    return this.usersService.createSubscriber(createUserDto);
  }

  @Put(':id/notifications/:notificationId')
  async setNotificationAsSeen(
    @Param('id') id: string,
    @Param('notificationId') notificationId: string,
  ): Promise<void> {
    return this.usersService.setNotificationAsSeen(id, notificationId);
  }
}
