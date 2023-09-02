import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/transformation/mergemap
// Example 3: mergeMap with promise (could also use from to convert to observable)

// helper to create promise
const innerPromise = (val) =>
  new Promise((resolve) => resolve(`${val} World From Promise!`));

const src$ = of('Hello');

// map to promise and emit result
src$
  .pipe(mergeMap((val) => innerPromise(val)))
  .subscribe((val) => console.log(val));
// output: 'Hello World From Promise'
