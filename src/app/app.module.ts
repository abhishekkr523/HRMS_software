import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
// import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment'; // Import the environment configuration

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
import { UserAuthComponent } from './user-auth/user-auth.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { WebsocketComponent } from './websocket/websocket.component';
import { RateLimitThrottleComponent } from './rate-limit-throttle/rate-limit-throttle.component';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user.effects';
import { AttendenceComponent } from './attendence/attendence.component';
import { TimeSheetComponent } from './time-sheet/time-sheet.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
// import {, MatTableModule} from '@angular/material/table';

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
    UserAuthComponent,
    SchedulerComponent,
    ReactiveFormComponent,
    WebsocketComponent,
    RateLimitThrottleComponent,
    AttendenceComponent,
    TimeSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatDatepickerModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule,
    MatSort,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    // StoreModule.forRoot(reducers, { metaReducers }),
    // environment.production ? [] : StoreDevtoolsModule.instrument(),
    // EffectsModule.forRoot([UserEffects]) // Conditionally include StoreDevtoolsModule
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
