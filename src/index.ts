import { Subject } from "rxjs";
import { handlerSubscribe } from "./utils/subscriptions-handler";

const subject = new Subject();

const subOne = subject.subscribe(handlerSubscribe(1));
subject.next("Hello");

const subTwo = subject.subscribe(handlerSubscribe(2));
subject.next("World");

const subThree = subject.subscribe(handlerSubscribe(3));
subject.complete();
