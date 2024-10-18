import { BehaviorSubject } from "rxjs";
import { handlerSubscribe } from "../utils/subscriptions-handler";

/**
 * Explanation:
 BehaviorSubject is used in cases of lazy subscriptions, when a new 
 subscribe is created after the next event, the new subscription 
 will receive the last event and new events too

 You can view behavior current value using .value or .getvalue()
*/

const subject = new BehaviorSubject("BEHAVIOR_INITIAL_VALUE");
const subOne = subject.subscribe(handlerSubscribe(1));
subject.next("FIRST EVENT");

console.log(
  `INIT_SECOND_SUBSCRIPTION Behavior current value: ${subject.getValue()}`
);
const subTwo = subject.subscribe(handlerSubscribe(2));
subject.next("SECOND EVENT");

setTimeout(() => {
  console.log(
    `INIT_THIRD_SUBSCRIPTION Behavior current value: ${subject.value}`
  );
  const subTwo = subject.subscribe(handlerSubscribe(3));
  subject.next("THIRD EVENT");

  subOne.unsubscribe();
  subTwo.unsubscribe();
}, 2000);
