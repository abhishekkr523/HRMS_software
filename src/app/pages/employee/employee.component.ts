import { Component, OnInit } from '@angular/core';
import { catchError, concatMap, delay, filter, from, interval, map, mergeMap, of, retry, retryWhen, switchMap, take, throwError } from 'rxjs';
import { CommonServiceService } from '../../services/common-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent  implements OnInit{
  mapResult: any[] = [];
  filterResult: any[] = [];
  higherOrderMergeMapResult: any[] = [];
  higherOrderConcatMapResult: any[] = [];
  higherOrderSwitchMapResult: any[] = [];

  catchErrorResult: any[] = [];
  retryResult: any[] = [];
  retryWhenResult: any[] = [];
  onErrorResumeNextResult: any[] = [];


  result:any;
  constructor(private srv: CommonServiceService) {
    this.srv.studentsSubject.subscribe(value=>{
      this.result=value
    })
  }
  ngOnInit(): void {
    this.demoMapOperator();
    this.demoFilterOperator();
    this.demoHigherOrderMergeMapOperator();
    this.demoHigherOrderConcatMapOperator();
    this.demoHigherOrderSwitchMapOperator();

    this.demoCatchError();
    this.demoRetry();
    this.demoRetryWhen();
  }

  demoMapOperator() {
    of(1, 2, 3, 4, 5).pipe(
      map(x => x * 2)
    ).subscribe(result => this.mapResult.push(result));
  }

  demoFilterOperator() {
    of(1, 2, 3, 4, 5).pipe(
      filter(x => x % 2 === 0)
    ).subscribe(result => this.filterResult.push(result));
  }

  demoHigherOrderMergeMapOperator() {
    of(1, 2, 3).pipe(
      mergeMap(x => from([`A${x}`, `B${x}`, `C${x}`]))
    ).subscribe(result => this.higherOrderMergeMapResult.push(result));
  }

  demoHigherOrderConcatMapOperator() {
    of(1, 2, 3).pipe(
      concatMap(x => from([`A${x}`, `B${x}`, `C${x}`]))
    ).subscribe(result => this.higherOrderConcatMapResult.push(result));
  }

  demoHigherOrderSwitchMapOperator() {
    interval(1000).pipe(
      take(3),
      switchMap(x => from([`A${x}`, `B${x}`, `C${x}`]))
    ).subscribe(result => this.higherOrderSwitchMapResult.push(result));
  }


  demoCatchError() {
    of(1, 2, 3).pipe(
      map(x => {
        if (x === 3) {
          throw 'Error!';
        }
        return x;
      }),
      catchError(err => {
        console.error('Caught error:', err);
        return of('Recovered from error');
      })
    ).subscribe(result => this.catchErrorResult.push(result));
  }

  demoRetry() {
    let attempt = 0;
    throwError('Error!').pipe(
      retry(2),
      catchError(err => {
        console.error('Caught error after retry:', err);
        return of('Recovered from error');
      })
    ).subscribe(result => this.retryResult.push(result));
  }

  demoRetryWhen() {
    let attempt = 0;
    throwError('Error!').pipe(
      retryWhen(errors =>
        errors.pipe(
          delay(1000),
          take(3)
        )
      ),
      catchError(err => {
        console.error('Caught error after retryWhen:', err);
        return of('Recovered from error');
      })
    ).subscribe(result => this.retryWhenResult.push(result));
  }
}
