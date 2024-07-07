import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeSheetComponent } from './time-sheet/time-sheet.component';
import { ManageLeaveComponent } from './manage-leave/manage-leave.component';
import { AttendanceComponent } from './attendance/attendance.component';



@NgModule({
  declarations: [
    TimeSheetComponent,
    ManageLeaveComponent,
    AttendanceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TimesheetModule { }
