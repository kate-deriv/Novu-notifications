import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';

export function GetNotificationsSwagger() {
  return applyDecorators(
    ApiOperation({
      summary: 'Get user notifications',
      description:
        'Retrieve paginated list of notifications for a specific user',
    }),
    ApiParam({
      name: 'id',
      description: 'Subscriber ID',
      required: true,
      type: String,
    }),
    ApiQuery({
      name: 'page',
      description: 'Page number (0-based)',
      required: false,
      type: Number,
    }),
    ApiQuery({
      name: 'limit',
      description: 'Number of items per page (max 100)',
      required: false,
      type: Number,
    }),
    ApiQuery({
      name: 'read',
      description: 'Filter by read status',
      required: false,
      type: Boolean,
    }),
    ApiQuery({
      name: 'seen',
      description: 'Filter by seen status',
      required: false,
      type: Boolean,
    }),
    ApiResponse({
      status: 200,
      description: 'List of notifications retrieved successfully',
      schema: {
        type: 'object',
        properties: {
          data: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'string', example: 'notification-123' },
                subscriberId: { type: 'string', example: 'subscriber-123' },
                templateIdentifier: { type: 'string', example: 'welcome-template' },
                channel: { type: 'string', example: 'email' },
                event: { type: 'string', example: 'welcome' },
                content: { type: 'string', example: 'Welcome to our platform!' },
                created_at: { type: 'string', example: '2024-03-10T15:30:00.000Z' },
                seen: { type: 'boolean', example: false },
                read: { type: 'boolean', example: false },
                transactionId: { type: 'string', example: 'transaction-123' },
                payload: { 
                  type: 'object',
                  additionalProperties: true,
                  example: { key: 'value' }
                },
              },
            },
          },
          page: { type: 'number', example: 0 },
          totalCount: { type: 'number', example: 100 },
          pageSize: { type: 'number', example: 10 },
          hasMore: { type: 'boolean', example: true },
        },
      },
    }),
  );
}
