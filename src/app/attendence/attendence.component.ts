import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CommonServiceService } from '../services/common-service.service';
import { map, tap } from 'rxjs/operators';

export interface UserData {
  id: string;
  name: string;
}

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.scss'],
})
export class AttendenceComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name'];
  dataSource: MatTableDataSource<UserData> = new MatTableDataSource<UserData>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private srv: CommonServiceService) {
    this.srv.getTimes().pipe(
      tap(data => console.log(data)), // Logging the data
      map((data: any[]) => data.map((item, index) => ({
        id: item.ID.toString(),
        name: item.timeDetails,
      })))
    ).subscribe(users => {
      this.dataSource.data = users;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
