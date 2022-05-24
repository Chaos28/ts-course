interface IProvider {
  sendMessage(message: string): void;
  connect(config: unknown): void;
  disconnect<T>(): void;
}

class TelegramProvider implements IProvider {
  sendMessage(message: string): void {
    console.log(message);
  }
  connect(config: string): void {
    console.log(config);
  }
  disconnect<T>(): void {
    console.log("Disconnected TG");
  }
}

class WhatsupProvider implements IProvider {
  sendMessage(message: string): void {
    console.log(message);
  }
  connect(config: string): void {
    console.log(config);
  }
  disconnect<T>(): void {
    console.log("Disconnected Wup");
  }
}

class NotificationSender {
  constructor(private provider: IProvider) {}

  send() {
    this.provider.connect("connect");
    this.provider.sendMessage("message");
    this.provider.disconnect();
  }
}

class DelayNotificationSender extends NotificationSender {
  constructor(provider: IProvider) {
    super(provider);
  }
  sendDelayed() {}
}

const sender = new NotificationSender(new TelegramProvider());
sender.send();

const sender2 = new NotificationSender(new WhatsupProvider());
sender2.send();
