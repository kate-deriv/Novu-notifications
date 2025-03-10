import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Get,
  Param,
} from '@nestjs/common';
import { UsersService } from '../app/users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createSubscriber(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createSubscriber(createUserDto);
  }

  @Get(':id/notifications')
  async getSubscribersNotifications(@Param('id') id: string) {
    return this.usersService.getNotificationsByUserId(id);
  }
}
