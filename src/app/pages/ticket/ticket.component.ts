import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'] // Note the correct spelling "styleUrls"
})
export class TicketComponent implements AfterViewInit {
  @ViewChild('myButton')
  button!: ElementRef;

  ngAfterViewInit() {
    const clickObservable = fromEvent(this.button.nativeElement, 'click');
  
    const dynamicObservable = clickObservable.pipe(
      switchMap(() => {
        return of('Clicked!').pipe(
          map(value => `${value} at ${new Date().toLocaleTimeString()}`)
        );
      })
    );
  
    dynamicObservable.subscribe(value => console.log(value));
  }
}
