import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../api/dto/create-user.dto';
import { NovuService } from '../../novu/novu.service';

@Injectable()
export class UsersService {
  constructor(private readonly novuService: NovuService) {}

  async createSubscriber(createUserDto: CreateUserDto) {
    const novu = this.novuService.getNovuInstance();
    const result = await novu.subscribers.create({
      subscriberId: createUserDto.subscriberId,
    });

    // Handle the result
    console.log(result?.result);
    return result?.result;
  }
}
