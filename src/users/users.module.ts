import { Module } from '@nestjs/common';
import { UsersService } from './app/users.service';
import { UsersController } from './api/users.controller';
import { NovuModule } from '../novu/novu.module';

@Module({
  imports: [NovuModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
