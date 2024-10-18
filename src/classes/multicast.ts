import { interval, map, share, tap } from "rxjs";
import { handlerSubscribe } from "../utils/subscriptions-handler";

/* 
Explanation:
Share operator, allows a single observable execution
to be shared among multiple subscribers. Improve performance 
and reduce resource consumption
*/

const interval$ = interval(2000).pipe(
  tap((time) => console.log(`Interval: ${time}`))
);

const multicastedInterval$ = interval$.pipe(share());

const subOne = multicastedInterval$.subscribe(handlerSubscribe);
const subTwo = multicastedInterval$.subscribe(handlerSubscribe);

setTimeout(() => {
  console.log("CALLED_TIMEOUT");
  subOne.unsubscribe();
  subTwo.unsubscribe();
}, 300);

// Example using IA to understand better this operator

// Create a hot Observable that emits a value every second
const source$ = interval(1000).pipe(
  map((val) => `Value: ${val}`),
  share() // Share the source Observable
);

// First subscriber
const sub1 = source$.subscribe((val) => console.log(`Subscriber 1: ${val}`));

// Simulate a delay before the second subscriber subscribes
setTimeout(() => {
  const sub2 = source$.subscribe((val) => console.log(`Subscriber 2: ${val}`));
  setTimeout(() => {
    sub1.unsubscribe();
    sub2.unsubscribe();
  }, 3000);
}, 3000);
