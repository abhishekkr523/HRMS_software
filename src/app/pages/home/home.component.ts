import { Component,ChangeDetectionStrategy, model } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CommonServiceService } from '../../services/common-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [provideNativeDateAdapter()],
  // imports: [MatCardModule, MatDatepickerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  selected = model<Date | null>(null);

  constructor(private srv: CommonServiceService) {
    // Subscribe to the data observable
    this.srv.getData().subscribe((result: any) => {
      console.log('Data received:', result);
    });
    
    // Trigger the data fetch
    this.srv.fetchData();
  }
}
