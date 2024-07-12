import { Component, OnInit } from '@angular/core';
import { Subscription, fromEvent, interval, of, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-zoom-meeting',
  templateUrl: './zoom-meeting.component.html',
  styleUrl: './zoom-meeting.component.scss'
})
export class ZoomMeetingComponent implements OnInit{
  ngOnInit(): void {
    // const observable1 = of(1, 2, 3);
    // const subscription = observable1.subscribe({
    //   next: value => console.log('Next:', value),
    //   error: err => console.error('Error:', err),
    //   complete: () => console.log('Complete')
    // });
    // // Later in your code, when you want to unsubscribe
    // subscription.unsubscribe();

// **********************************************************************************************

//     const observable2 = interval(1000).pipe(take(5));
// observable2.subscribe({
//   next: value => console.log('Next:', value),
//   complete: () => console.log('Complete')
// });

// **********************************************************************************************
// const observable3 = interval(1000);
// const stop$ = fromEvent(document, 'click');
// observable3.pipe(takeUntil(stop$)).subscribe({
//   next: value => console.log('Next:', value),
//   complete: () => console.log('Complete')
// });

// ********************************************************************************************
// const subscription4 = new Subscription();
// const observable5 = interval(1000);
// const observable6 = interval(2000);
// const sub1 = observable5.subscribe(value => console.log('Observable 1:', value));
// const sub2 = observable6.subscribe(value => console.log('Observable 2:', value));
// subscription4.add(sub1);
// subscription4.add(sub2);

// setTimeout(() => {
//   console.log('Unsubscribing from all subscriptions');
//   subscription4.unsubscribe();
// }, 5000);

  }
  
}
