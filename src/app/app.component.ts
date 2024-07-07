import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hrms_clone';

  resolved(captchaResponse: string | null) {
    if (captchaResponse) {
      console.log(`Resolved captcha with response: ${captchaResponse}`);
    } else {
      console.log('Captcha response is null');
    }
  }
}
