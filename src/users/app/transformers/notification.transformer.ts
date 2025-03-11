interface RawNotification {
  _id: string;
  templateIdentifier: string;
  channel: string;
  event: string;
  content: string;
  createdAt: string;
  seen: boolean;
  read: boolean;
  transactionId: string;
  payload: Record<string, unknown>;
}

export interface Notification {
  id: string;
  templateIdentifier: string;
  channel: string;
  content: string;
  createdAt: string;
  seen: boolean;
  read: boolean;
  transactionId: string;
  payload: Record<string, unknown>;
}

export class NotificationTransformer {
  static transform(notification: RawNotification): Notification {
    return {
      id: notification._id,
      templateIdentifier: notification.templateIdentifier,
      channel: notification.channel,
      content: notification.content,
      createdAt: notification.createdAt,
      seen: notification.seen,
      read: notification.read,
      transactionId: notification.transactionId,
      payload: notification.payload,
    };
  }

  static transformMany(notifications: RawNotification[]): Notification[] {
    return notifications.map(this.transform);
  }
}
