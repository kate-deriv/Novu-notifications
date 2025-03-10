import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

export function MarkAsSeenSwagger() {
  return applyDecorators(
    ApiOperation({
      summary: 'Mark notification as seen',
      description: 'Mark a specific notification as seen for a user',
    }),
    ApiParam({
      name: 'id',
      description: 'Subscriber ID',
      required: true,
      type: String,
    }),
    ApiParam({
      name: 'notificationId',
      description: 'Notification ID to mark as seen',
      required: true,
      type: String,
    }),
    ApiResponse({
      status: 200,
      description: 'Notification marked as seen successfully',
    }),
  );
}
