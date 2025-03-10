interface RawNotification {
  _id: string;
  subscriber_id: string;
  template_identifier: string;
  channel: string;
  event: string;
  content: string;
  created_at: string;
  seen: boolean;
  read: boolean;
  transaction_id: string;
  payload: Record<string, unknown>;
}

export interface Notification {
  id: string;
  subscriberId: string;
  templateIdentifier: string;
  channel: string;
  event: string;
  content: string;
  created_at: string;
  seen: boolean;
  read: boolean;
  transactionId: string;
  payload: Record<string, unknown>;
}

export class NotificationTransformer {
  static transform(notification: RawNotification): Notification {
    return {
      id: notification._id,
      subscriberId: notification.subscriber_id,
      templateIdentifier: notification.template_identifier,
      channel: notification.channel,
      event: notification.event,
      content: notification.content,
      created_at: notification.created_at,
      seen: notification.seen,
      read: notification.read,
      transactionId: notification.transaction_id,
      payload: notification.payload,
    };
  }

  static transformMany(notifications: RawNotification[]): Notification[] {
    return notifications.map(this.transform);
  }
}
