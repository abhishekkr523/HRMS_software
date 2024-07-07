import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ContractsComponent } from './pages/contracts/contracts.component';
import { DocumentComponent } from './pages/document/document.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { EventComponent } from './pages/event/event.component';
import { MeetingComponent } from './pages/meeting/meeting.component';
import { MessengerComponent } from './pages/messenger/messenger.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { ZoomMeetingComponent } from './pages/zoom-meeting/zoom-meeting.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'contracts', component:ContractsComponent  },
      { path: 'document', component: DocumentComponent },
      { path: 'employee', component:EmployeeComponent},
      { path: 'event', component:EventComponent  },
      { path: 'home', component: HomeComponent },
      { path: 'meeting', component: MeetingComponent },
      { path: 'messenger', component: MessengerComponent },
      { path: 'ticket', component:TicketComponent  },
      { path: 'zoom-meeting', component: ZoomMeetingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
