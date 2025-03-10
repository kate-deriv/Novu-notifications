import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { NovuModule } from './novu/novu.module';
import { PurchaseModule } from './purchase/purchase.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    NovuModule,
    UsersModule,
    PurchaseModule,
    ServeStaticModule.forRootAsync({
      useFactory: () => {
        return [
          {
            rootPath: join(__dirname, '..', 'swagger-static'),
            serveRoot: '/swagger',
          },
        ];
      },
      inject: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
