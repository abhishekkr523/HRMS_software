import { Component } from '@angular/core';
import {
  Observable,
  ReplaySubject,
  Subject,
  filter,
  interval,
  map,
  mergeMap,
  of,
  switchMap,
  take,
} from 'rxjs';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrl: './document.component.scss',
})
export class DocumentComponent {
  myData: number[]=[];
  subject = new ReplaySubject<number>();
  constructor() {
    // let obser = new Observable<string>((observer) => {
    //   observer.next('oo'); observer.next('pp');
    //   observer.error("error");
    //   observer.complete()
    // });
    // obser.subscribe({
    //   next: (value) => console.log(value),
    //   error:(err)=>{console.log("error occur",err)},
    //   complete:()=>{console.log("complete")}
    // });
    // let sub=new Subject()
    // sub.subscribe({
    //   next:(value)=>(console.log("data",value))
    // })
    // sub.next(1);
    // sub.next(2);
    // sub.next(3);
  }

  emitdata() {
    this.subject.next(1);
    console.log("1")
    setInterval(() => {
      this.subject.next(2);
      console.log("2")
    }, 3000);
    setInterval(() => {
      this.subject.next(3);
      console.log("3")
    }, 6000);
    setInterval(() => {
      this.subject.next(4);
      console.log("4")
    }, 9000);
    setInterval(() => {
      this.subject.next(5);
      console.log("5")
    }, 12000);
  }

  getData() {
    this.subject.subscribe((value) => {
      this.myData.push(value); 
    });
  }
}
