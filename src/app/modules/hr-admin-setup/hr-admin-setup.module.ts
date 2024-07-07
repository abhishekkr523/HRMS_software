import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwardComponent } from './award/award.component';
import { TransferComponent } from './transfer/transfer.component';
import { RegistrationComponent } from './registration/registration.component';
import { TripComponent } from './trip/trip.component';
import { PromotionComponent } from './promotion/promotion.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { WarningComponent } from './warning/warning.component';
import { TerminationComponent } from './termination/termination.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { HolidayComponent } from './holiday/holiday.component';



@NgModule({
  declarations: [
    AwardComponent,
    TransferComponent,
    RegistrationComponent,
    TripComponent,
    PromotionComponent,
    ComplaintsComponent,
    WarningComponent,
    TerminationComponent,
    AnnouncementComponent,
    HolidayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HrAdminSetupModule { }
