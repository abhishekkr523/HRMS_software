import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatCardModule} from '@angular/material/card';
import { RecaptchaModule } from "ng-recaptcha";
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ContractsComponent } from './pages/contracts/contracts.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { EventComponent } from './pages/event/event.component';
import { MeetingComponent } from './pages/meeting/meeting.component';
import { ZoomMeetingComponent } from './pages/zoom-meeting/zoom-meeting.component';
import { DocumentComponent } from './pages/document/document.component';
import { MessengerComponent } from './pages/messenger/messenger.component';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    EmployeeComponent,
    ContractsComponent,
    TicketComponent,
    EventComponent,
    MeetingComponent,
    ZoomMeetingComponent,
    DocumentComponent,
    MessengerComponent,
    UserAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    RecaptchaModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
