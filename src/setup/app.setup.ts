import { pipesSetup } from './pipes.setup';
import { INestApplication } from '@nestjs/common';
import { validationConstraintSetup } from './validation-constrain.setup';
import { swaggerSetup } from './swagger.setup';

export function appSetup(app: INestApplication) {
  pipesSetup(app);
  app.enableCors();
  validationConstraintSetup(app);
  swaggerSetup(app);
}
