import notifee, {
  AuthorizationStatus,
  EventType,
  Notification,
  TimestampTrigger,
  TriggerType,
} from "@notifee/react-native";

class Notifications {
  channelId: string | undefined;

  constructor() {
    this.bootstrap();
    this.createChannel();
    this.setupEventListeners();
    this.logAllTriggerNotifications();
  }

  private setupEventListeners() {
    notifee.onForegroundEvent(({ type, detail }) => {
      if (type === EventType.PRESS) {
        console.log("User pressed notification", detail.notification);
        this.handleNotificationOpen(detail.notification as Notification);
      }
    });

    notifee.onBackgroundEvent(async ({ type, detail }) => {
      const { notification } = detail;
      console.log("Notification received: background", type, detail);
      if (notification) {
        this.handleNotificationOpen(notification);
      }
    });
  }

  private async logAllTriggerNotifications() {
    const ids = await notifee.getTriggerNotificationIds();
    console.log("All trigger notification IDs:", ids);

    const notifications = await notifee.getTriggerNotifications();
    console.log("All trigger notifications:", notifications);
  }

  public async createChannel() {
    this.channelId = await notifee.createChannel({
      id: "default",
      name: "Reminder Channel",
    });
  }

  public handleNotificationOpen(notification: Notification) {
    const { data } = notification;
    console.log("Notification received: foreground", data);
  }

  private async bootstrap() {
    const initialNotification = await notifee.getInitialNotification();

    if (initialNotification) {
      console.log(
        "Notification caused application to open",
        initialNotification.notification
      );
      console.log(
        "Press action used to open the app",
        initialNotification.pressAction
      );
      this.handleNotificationOpen(initialNotification.notification);
    }
  }

  public async checkPermissions() {
    const settings = await notifee.requestPermission();

    if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
      console.log("Permission settings:", settings);
      return true;
    } else {
      console.log("User declined permissions");
      return false;
    }
  }

  public async scheduleNotification({
    reminder,
    dateFirst,
    dateSecond,
  }: {
    reminder: string;
    dateFirst: Date;
    dateSecond: Date;
  }) {
    console.log("Scheduling notification for", dateFirst, dateSecond);
    const hasPermissions = await this.checkPermissions();
    if (hasPermissions) {
      const triggerOne: TimestampTrigger = {
        type: TriggerType.TIMESTAMP,
        timestamp: +dateFirst,
      };
      const triggerTwo: TimestampTrigger = {
        type: TriggerType.TIMESTAMP,
        timestamp: +dateSecond,
      };

      await notifee.createTriggerNotification(
        {
          id: "1",
          title: `One hour until bedtime! 🔔`,
          body: "Give yourself the best chance to get good sleep: get off screens, stretch, read a book, take a warm bath, or listen to some relaxing music!",
          android: {
            channelId: this.channelId,
            pressAction: {
              id: "default",
            },
          },
          data: {
            id: "1",
            action: "reminder",
            details: {
              name: reminder,
              date: dateFirst.toString(),
            },
          },
        },
        triggerOne
      );

      await notifee.createTriggerNotification(
        {
          id: "2",
          title: `Time to get to bed! 🔔`,
          body: "Light's out! It's time to climb into bed and get a good night's sleep. Sweet dreams! 🌙",
          android: {
            channelId: this.channelId,
            pressAction: {
              id: "default",
            },
          },
          data: {
            id: "2",
            action: "reminder",
            details: {
              name: reminder,
              date: dateSecond.toString(),
            },
          },
        },
        triggerTwo
      );
    }
  }

  public async cancelNotification() {
    await notifee.cancelNotification("1");
  }
}

export default new Notifications();
