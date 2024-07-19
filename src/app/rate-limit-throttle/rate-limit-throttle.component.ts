import { Component, AfterViewInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { throttleTime, debounceTime, throttle } from 'rxjs/operators';

@Component({
  selector: 'app-rate-limit-throttle',
  templateUrl: './rate-limit-throttle.component.html',
  styleUrl: './rate-limit-throttle.component.scss'
})
export class RateLimitThrottleComponent  {

  // ngAfterViewInit() {
  //   this.setupButtonClick();
  //   this.setupInputDebounce();
  // }

  // setupButtonClick() {
  //   const button = document.getElementById('myButton') as HTMLElement;
  //   if (button) {
  //     fromEvent(button, 'click')
  //       .pipe(
  //         throttleTime(3000)
  //       )
  //       .subscribe(() => {
  //         console.log('Button clicked');
  //       });
  //   }
  // }

  // setupInputDebounce() {
  //   const searchInput = document.getElementById('searchInput') as HTMLInputElement;
  //   if (searchInput) {
  //     fromEvent(searchInput, 'input')
  //       .pipe(
  //         debounceTime(3000)
  //       )
  //       .subscribe(() => {
  //         console.log('Input event processed');
  //       });
  //   }
  // }

  
}
