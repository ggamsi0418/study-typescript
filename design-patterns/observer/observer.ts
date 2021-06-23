interface NotificationObserver {
  onMessage(message: Message): string;
}

interface Notify {
  sendMessage(message: Message): any;
}

class Message {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  getMessage(): string {
    return `${this.message} from publication`;
  }
}

class User implements NotificationObserver {
  element: Element;

  constructor(element: Element) {
    this.element = element;
  }

  onMessage(message: Message) {
    return (this.element.innerHTML += `<li>you have a new message - ${message.getMessage()}</li>`);
  }
}

class MailingList implements Notify {
  protected observers: User[] = [];

  notify(message: Message) {
    this.observers.forEach((observer) => {
      observer.onMessage(message);
    });
  }

  subscribe(observer: User) {
    this.observers.push(observer);
  }
  unsubscribe(observer: User) {
    this.observers = this.observers.filter(
      (subscriber) => subscriber !== observer
    );
  }

  sendMessage(message: Message) {
    this.notify(message);
  }
}

const messageInput = <HTMLInputElement>document.querySelector(".message-input");

const user1: Element = <Element>document.querySelector(".user1-messages");
const user2: Element = <Element>document.querySelector(".user2-messages");
const user3: Element = <Element>document.querySelector(".user3-messages");

const u1 = new User(user1);
const u2 = new User(user2);
const u3 = new User(user3);

const subscribeU1: Element = <Element>document.querySelector(".user1-subscribe");
const subscribeU2: Element = <Element>document.querySelector(".user2-subscribe");
const subscribeU3: Element = <Element>document.querySelector(".user3-subscribe");

const unSubscribeU1: Element = <Element>document.querySelector(".user1-unsubscribe");
const unSubscribeU2: Element = <Element>document.querySelector(".user2-unsubscribe");
const unSubscribeU3: Element = <Element>document.querySelector(".user3-unsubscribe");

const sendBtn: Element = <Element>document.querySelector(".send-btn");

const mailingList = new MailingList();

mailingList.subscribe(u1);
mailingList.subscribe(u2);
mailingList.subscribe(u3);

subscribeU1.addEventListener("click", () => {
  mailingList.subscribe(u1);
});
subscribeU2.addEventListener("click", () => {
  mailingList.subscribe(u2);
});
subscribeU3.addEventListener("click", () => {
  mailingList.subscribe(u3);
});

unSubscribeU1.addEventListener("click", () => {
  mailingList.unsubscribe(u1);
});
unSubscribeU2.addEventListener("click", () => {
  mailingList.unsubscribe(u2);
});
unSubscribeU3.addEventListener("click", () => {
  mailingList.unsubscribe(u3);
});

sendBtn.addEventListener("click", () => {
  mailingList.sendMessage(new Message(messageInput.value));
});
