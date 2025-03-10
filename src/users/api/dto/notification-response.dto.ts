import { ApiProperty } from '@nestjs/swagger';

export class NotificationResponseDto {
  @ApiProperty({
    description: 'Notification ID',
    example: 'notification-123',
  })
  id: string;

  @ApiProperty({
    description: 'Subscriber ID',
    example: 'subscriber-123',
  })
  subscriberId: string;

  @ApiProperty({
    description: 'Template identifier',
    example: 'welcome-template',
  })
  templateIdentifier: string;

  @ApiProperty({
    description: 'Channel type',
    example: 'email',
  })
  channel: string;

  @ApiProperty({
    description: 'Event name',
    example: 'welcome',
  })
  event: string;

  @ApiProperty({
    description: 'Notification content',
    example: 'Welcome to our platform!',
  })
  content: string;

  @ApiProperty({
    description: 'Creation timestamp',
    example: '2024-03-10T15:30:00.000Z',
  })
  created_at: string;

  @ApiProperty({
    description: 'Whether the notification has been seen',
    example: false,
  })
  seen: boolean;

  @ApiProperty({
    description: 'Whether the notification has been read',
    example: false,
  })
  read: boolean;

  @ApiProperty({
    description: 'Transaction ID',
    example: 'transaction-123',
  })
  transactionId: string;

  @ApiProperty({
    description: 'Additional payload data',
    example: { key: 'value' },
    required: false,
  })
  payload?: Record<string, unknown>;
}

export class NotificationsResponseDto {
  @ApiProperty({
    description: 'List of notifications',
    type: [NotificationResponseDto],
  })
  data: NotificationResponseDto[];

  @ApiProperty({
    description: 'Current page number',
    example: 0,
  })
  page: number;

  @ApiProperty({
    description: 'Total count of notifications',
    example: 100,
  })
  totalCount: number;

  @ApiProperty({
    description: 'Number of items per page',
    example: 10,
  })
  pageSize: number;

  @ApiProperty({
    description: 'Whether there are more pages available',
    example: true,
  })
  hasMore: boolean;
}
