import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appSetup } from './setup/app.setup';
import { generateSwaggerStaticFiles } from './setup/swagger.setup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Settings
  appSetup(app);

  await app.listen(process.env.PORT ?? 3000);

  await generateSwaggerStaticFiles(
    `http://localhost:${process.env.PORT ?? 3000}`,
    app,
  );
}
bootstrap();
