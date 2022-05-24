"use strict";
class TelegramProvider {
    sendMessage(message) {
        console.log(message);
    }
    connect(config) {
        console.log(config);
    }
    disconnect() {
        console.log("Disconnected TG");
    }
}
class WhatsupProvider {
    sendMessage(message) {
        console.log(message);
    }
    connect(config) {
        console.log(config);
    }
    disconnect() {
        console.log("Disconnected Wup");
    }
}
class NotificationSender {
    constructor(provider) {
        this.provider = provider;
    }
    send() {
        this.provider.connect("connect");
        this.provider.sendMessage("message");
        this.provider.disconnect();
    }
}
class DelayNotificationSender extends NotificationSender {
    constructor(provider) {
        super(provider);
    }
    sendDelayed() { }
}
const sender = new NotificationSender(new TelegramProvider());
sender.send();
const sender2 = new NotificationSender(new WhatsupProvider());
sender2.send();
