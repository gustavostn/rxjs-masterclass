import { Subject } from "rxjs";
import { handlerSubscribe } from "./utils/subscriptions-handler";

const subject = new Subject();

const subOne = subject.subscribe(handlerSubscribe);
subject.next("Hello");

const subTwo = subject.subscribe(handlerSubscribe);
subject.next("World");

const subThree = subject.subscribe(handlerSubscribe);
subject.complete();
