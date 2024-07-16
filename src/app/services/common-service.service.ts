import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, switchMap, throttleTime, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  private apiUrl = 'http://127.0.0.1:8000/api/student/';
  private dataRequestSubject = new Subject<void>();

  constructor(private http: HttpClient) { }

  // Method to trigger data fetch
  fetchData(): void {
    this.dataRequestSubject.next();
  }

  // Observable that handles the actual data fetch with throttling
  getData(): Observable<any> {
    return this.dataRequestSubject.pipe(
      throttleTime(2000), // limit requests to one every 2 seconds
      switchMap(() => this.http.get(this.apiUrl).pipe(
        catchError(error => {
          console.error('Error occurred:', error);
          return throwError(error);
        })
      ))
    );

    // or
    //  this.http.get(this.apiUrl).subscribe(
    //   (data) => {
    //     this.dataRequestSubject.next(data);
    //   },
    //   (error) => {
    //     this.dataRequestSubject.error(error);
    //   }
    // );
  }
}
