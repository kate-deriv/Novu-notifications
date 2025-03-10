import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

export function GetUnseenCountSwagger() {
  return applyDecorators(
    ApiOperation({
      summary: 'Get unseen notifications count',
      description: 'Get the count of unseen notifications for a specific user',
    }),
    ApiParam({
      name: 'id',
      description: 'Subscriber ID',
      required: true,
      type: String,
    }),
    ApiResponse({
      status: 200,
      description: 'Unseen notifications count retrieved successfully',
      schema: {
        type: 'object',
        properties: {
          count: { type: 'number' },
        },
      },
    }),
  );
}
