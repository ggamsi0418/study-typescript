"use strict";
class Message {
    constructor(message) {
        this.message = message;
    }
    getMessage() {
        return `${this.message} from publication`;
    }
}
class User {
    constructor(element) {
        this.element = element;
    }
    onMessage(message) {
        return (this.element.innerHTML += `<li>you have a new message - ${message.getMessage()}</li>`);
    }
}
class MailingList {
    constructor() {
        this.observers = [];
    }
    notify(message) {
        this.observers.forEach((observer) => {
            observer.onMessage(message);
        });
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        this.observers = this.observers.filter((subscriber) => subscriber !== observer);
    }
    sendMessage(message) {
        this.notify(message);
    }
}
const messageInput = document.querySelector(".message-input");
const user1 = document.querySelector(".user1-messages");
const user2 = document.querySelector(".user2-messages");
const user3 = document.querySelector(".user3-messages");
const u1 = new User(user1);
const u2 = new User(user2);
const u3 = new User(user3);
const subscribeU1 = document.querySelector(".user1-subscribe");
const subscribeU2 = document.querySelector(".user2-subscribe");
const subscribeU3 = document.querySelector(".user3-subscribe");
const unSubscribeU1 = document.querySelector(".user1-unsubscribe");
const unSubscribeU2 = document.querySelector(".user2-unsubscribe");
const unSubscribeU3 = document.querySelector(".user3-unsubscribe");
const sendBtn = document.querySelector(".send-btn");
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
