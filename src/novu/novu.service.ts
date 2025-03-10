import { Injectable } from '@nestjs/common';
import { Novu } from '@novu/api';
import { config } from 'dotenv';
config();

@Injectable()
export class NovuService {
  private readonly novu: Novu;

  constructor() {
    this.novu = new Novu({
      secretKey: process.env.NOVU_API_KEY,
    });
  }

  getNovuInstance(): Novu {
    return this.novu;
  }
}
