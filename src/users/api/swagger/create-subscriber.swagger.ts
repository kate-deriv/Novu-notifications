import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

export function CreateSubscriberSwagger() {
  return applyDecorators(
    ApiOperation({
      summary: 'Create subscriber',
      description: 'Create a new subscriber in the Novu system',
    }),
    ApiBody({
      schema: {
        type: 'object',
        required: ['subscriberId'],
        properties: {
          subscriberId: {
            type: 'string',
            description: 'Unique identifier for the subscriber',
            example: 'user-123',
          },
        },
      },
    }),
    ApiResponse({
      status: HttpStatus.CREATED,
      description: 'Subscriber created successfully',
      schema: {
        type: 'object',
        properties: {
          _id: { type: 'string', example: 'subscriber-123' },
          subscriberId: { type: 'string', example: 'user-123' },
          firstName: { type: 'string', example: 'John', nullable: true },
          lastName: { type: 'string', example: 'Doe', nullable: true },
          email: { type: 'string', example: 'john@example.com', nullable: true },
          phone: { type: 'string', example: '+1234567890', nullable: true },
          avatar: { type: 'string', example: 'https://example.com/avatar.jpg', nullable: true },
          locale: { type: 'string', example: 'en', nullable: true },
          data: { 
            type: 'object',
            additionalProperties: true,
            nullable: true,
            example: { customField: 'value' }
          },
        },
      },
    }),
  );
}
