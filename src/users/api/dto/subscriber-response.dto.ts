import { ApiProperty } from '@nestjs/swagger';

export class SubscriberResponseDto {
  @ApiProperty({
    description: 'Subscriber ID',
    example: 'subscriber-123',
  })
  subscriberId: string;

  @ApiProperty({
    description: 'First name of the subscriber',
    example: 'John',
    required: false,
  })
  firstName?: string;

  @ApiProperty({
    description: 'Last name of the subscriber',
    example: 'Doe',
    required: false,
  })
  lastName?: string;

  @ApiProperty({
    description: 'Email of the subscriber',
    example: 'john@example.com',
    required: false,
  })
  email?: string;

  @ApiProperty({
    description: 'Phone number of the subscriber',
    example: '+1234567890',
    required: false,
  })
  phone?: string;

  @ApiProperty({
    description: 'Avatar URL of the subscriber',
    example: 'https://example.com/avatar.jpg',
    required: false,
  })
  avatar?: string;

  @ApiProperty({
    description: 'Locale of the subscriber',
    example: 'en',
    required: false,
  })
  locale?: string;

  @ApiProperty({
    description: 'Data object containing additional subscriber information',
    example: { customField: 'value' },
    required: false,
  })
  data?: Record<string, unknown>;
}
