import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, catchError, switchMap, throttleTime, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  // private apiUrl = 'http://127.0.0.1:8000/api/student';

  // constructor(private http: HttpClient) {}

  // fetchStudents(): Observable<any> {
  //   return this.http.get<any[]>(this.apiUrl)
  //     .pipe(
  //       catchError(error => {
  //         console.error('Error fetching students:', error);
  //         return throwError(error);
  //       })
  //     );
  // }

  // private apiUrl = 'http://127.0.0.1:8000/api/student';
  private clockInOutApi = 'http://127.0.0.1:8000/api/clockinclockout';


  // private initialStudents = [
  //   { id: 1, name: 'Abhishek', city: 'New York', fees: 200 },
  //   { id: 2, name: 'kumar', city: 'Los Angeles', fees: 300 }
  // ];

  // public studentsSubject = new BehaviorSubject<any[]>(this.initialStudents);

  public studentsSubject = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {}

  // Fetch students and update the BehaviorSubject
  // fetchStudents(): void {
  //   this.http.get<any[]>(this.apiUrl)
  //     .pipe(
  //       catchError(error => {
  //         console.error('Error fetching students:', error);
  //         return throwError(error);
  //       })
  //     )
  //     .subscribe(
  //       students => {
  //         this.studentsSubject.next(students);
  //       },
  //       error => {
  //         console.error('Error fetching students:', error);
  //       }
  //     );
  // }

  getTimes(): Observable<any[]> {
    return this.http.get<any[]>(this.clockInOutApi);
  }
  clockInOut(timeDetails: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = { timeDetails };

    return this.http.post(this.clockInOutApi, body, { headers });
  }

  
}
