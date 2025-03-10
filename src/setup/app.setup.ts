import { pipesSetup } from './pipes.setup';
import { INestApplication } from '@nestjs/common';
import { validationConstraintSetup } from './validation-constrain.setup';

export function appSetup(app: INestApplication) {
  pipesSetup(app);
  app.enableCors();
  validationConstraintSetup(app);
}
