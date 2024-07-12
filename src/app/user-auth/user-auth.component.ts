import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.scss',
})
export class UserAuthComponent implements OnInit {
[x: string]: any;
  userForm!: FormGroup;

  

  userFor: any;
  constructor(private router: Router,private fb:FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });

    // Example: Using RxJS to react to form value changes
    this.userForm.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(values => {
      console.log('Form values changed:', values);
    });
  }
  
  userLogin(_t30: NgForm) {
    throw new Error('Method not implemented.');
  }
  resolved(captchaResponse: string | null) {
    if (captchaResponse) {
      console.log(`Resolved captcha with response: ${captchaResponse}`);
    } else {
      console.log('Captcha response is null');
    }
  }
  userauth() {
    if (this.userForm.valid) {
      const { email, password } = this.userForm.value;
      console.log('Form submitted:', this.userForm.value);

      if (password === 'user' && email=="user@gmail.com") {
        this.router.navigate(['/dashboard']);
      } else {
        alert('Incorrect email and password.');
      }
    } else {
      alert('Form is invalid.');
    }
  }
}
