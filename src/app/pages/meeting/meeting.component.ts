import { Component, OnInit } from '@angular/core';
import { catchError, map, of, retry, throwError } from 'rxjs';
import { CommonServiceService } from '../../services/common-service.service';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrl: './meeting.component.scss'
})
export class MeetingComponent implements OnInit{
  result:any
  constructor(private srv:CommonServiceService) {}

  ngOnInit() {

    this.srv.studentsSubject.subscribe(
      res => {
        this.result = res;
        console.log("kkk",res)
      },
      error => {
        console.error('Errorrrr:', error);
      }
    );

    // Optionally, you can fetch the students to ensure the BehaviorSubject is populated
    // this.srv.fetchStudents();
    // Example observable with potential errors
    const numbers$ = of(1, 2, 3, 4, 5).pipe(
      // Simulate an error
      map(value => {
        if (value === 3) {
          throw new Error('Something went wrong');
        }
        return value;
      }),
      // Apply retry strategy
      retry(2), // Retry up to 2 times
      // Handle errors
      catchError(error => {
        console.error('Caught an error:', error);
        // Return a fallback observable or rethrow the error
        return throwError('Encountered an error and recovered');
      })
    );

    // Use the custom operator with a parameter
    numbers$.subscribe({
      next(value) {
        console.log(value); // Logs 1, 2, "Encountered an error and recovered", 4, 5
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
