import { Component, ChangeDetectionStrategy, model } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CommonServiceService } from '../../services/common-service.service';
import { Observable, catchError } from 'rxjs';
import moment from 'moment';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [provideNativeDateAdapter()],
  // imports: [MatCardModule, MatDatepickerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  selected: Date | null = null;

  clockedIn: boolean = false;

  // students: any[] = [];
  // error: string = '';

  // constructor(private commonService: CommonServiceService) {}

  // ngOnInit(): void {
  //   this.getStudents();
  // }

  // getStudents(): void {
  //   this.commonService.fetchStudents().subscribe(
  //     data => {
  //       this.students = data;
  //       console.log(data)
  //     },
  //     error => {
  //       this.error = 'Error fetching students';
  //       console.error(error);
  //     }
  //   );
  // }
  students: any[] = [];
  error: string = '';

  constructor(private commonService: CommonServiceService) {}

  ngOnInit(): void {
    this.commonService.studentsSubject.subscribe(
      (data) => {
        this.students = data;
        console.log('ll', data);
      },
      (error) => {
        this.error = 'Error fetching students';
        console.error(error);
      }
    );

    // Fetch students to populate the BehaviorSubject
    // this.commonService.fetchStudents();
  }
  clockIn() {
    const now = "Clock-In : "+moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(`CLOCK INN: ${now}`);

    this.commonService.clockInOut(now).subscribe((response) => {
      console.log('Response:', response);
    });

    this.clockedIn = true; 
  }

  clockOut() {
    const now = "Clock-Out : "+moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(`CLOCK INN: ${now}`);

    this.commonService.clockInOut(now).subscribe((response) => {
      console.log('Response:', response);
    });

    this.clockedIn = false;
  }
}
