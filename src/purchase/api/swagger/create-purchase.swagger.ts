import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

export function CreatePurchaseSwagger() {
  return applyDecorators(
    ApiTags('Purchase'),
    ApiOperation({
      summary: 'Create purchase',
      description: 'Create a new purchase and send notification to subscriber',
    }),
    ApiBody({
      schema: {
        type: 'object',
        required: ['subscriberId', 'text'],
        properties: {
          subscriberId: {
            type: 'string',
            description: 'ID of the subscriber who made the purchase',
            example: 'user-123',
          },
          text: {
            type: 'string',
            description: 'Purchase details or message',
            example: 'Purchased Premium Subscription',
          },
        },
      },
    }),
    ApiResponse({
      status: HttpStatus.CREATED,
      description: 'Purchase created and notification sent successfully',
    }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description: 'Invalid request payload',
    }),
    ApiResponse({
      status: HttpStatus.NOT_FOUND,
      description: 'Subscriber not found',
    }),
  );
}
