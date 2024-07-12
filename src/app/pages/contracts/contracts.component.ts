import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrl: './contracts.component.scss',
})
export class ContractsComponent implements OnInit {
  ngOnInit() {
    const numbersObservable = new Observable<number>((observer) => {
      let count = 0;
      const intervalId = setInterval(() => {
        observer.next(count++); 
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    });

    const subscription = numbersObservable.subscribe((value) => {
      console.log(value);
    });

    setTimeout(() => {
      subscription.unsubscribe();
      console.log('Unsubscribed');
    }, 10000);
  }
}
