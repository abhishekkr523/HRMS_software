import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';
import { animationFrameScheduler, asapScheduler, fromEvent, interval, map, observeOn } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent  {
  
  handleClick(event: Event) {
    fromEvent(event.target as HTMLElement, 'click').pipe(
      observeOn(asapScheduler)
    ).subscribe(() => console.log('Button clicked!'));
  }
 

  
}
