import { Component, OnInit } from '@angular/core';
import {
  Observable,
  concatMap,
  delay,
  filter,
  fromEvent,
  interval,
  map,
  mergeMap,
  of,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss',
})
export class EventComponent implements OnInit {
  ngOnInit(): void {
    of(1, 2, 3)
      .pipe(map((value) => value * 2))
      .subscribe((value) => console.log(value)); // Output: 2, 4, 6

    of(1, 2, 3, 4, 5)
      .pipe(filter((value) => value % 2 === 0))
      .subscribe((value) => console.log(value)); // Output: 2, 4

    of('Hello', 'World')
      .pipe(mergeMap((value) => of(`${value} RxJS`)))
      .subscribe((value) => console.log(value)); // Output: Hello RxJS, World RxJS

    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(switchMap(() => interval(1000)));
    result.subscribe((x) => console.log(x)); // Output: 0, 1, 2, ... (restarts on each click)


    of(1, 2, 3).pipe(
      concatMap(value => of(value).pipe(delay(1000)))
    ).subscribe(value => console.log(value)); // Output: 1 (after 1s), 2 (after 2s), 3 (after 3s)
  }



  constructor() {
    // Example observable
    const numbers$ = of(1, 2, 3, 4, 5);

    // Define custom operator
    function multiply(factor: number) {
      return (source: Observable<number>) =>
        new Observable<number>(subscriber => {
          source.subscribe({
            next(value) {
              subscriber.next(value * factor);
            },
            error(err) {
              subscriber.error(err);
            },
            complete() {
              subscriber.complete();
            }
          });
        });
    }
    
    // Use the custom operator with a parameter
    numbers$.pipe(
      multiply(3) // Multiplies each value by 3
    ).subscribe({
      next(value) {
        console.log(value); // Logs 3, 6, 9, 12, 15
      },
      error(err) {
        console.error('Something went wrong:', err);
      },
      complete() {
        console.log('Completed');
      }
    });
  }
}
