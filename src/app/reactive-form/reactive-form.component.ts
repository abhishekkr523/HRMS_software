import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent {
  myForm!: FormGroup;
  valueChangesSubscription!: Subscription;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
    });

    // this.valueChangesSubscription = this.myForm.valueChanges.subscribe(
    //   (values) => {
    //     console.log('Form values changed:', values);
    //   }
    // );

    // this.valueChangesSubscription = this.myForm
    //   .get('email')!
    //   .valueChanges.subscribe((email) => {
    //     console.log('Email changed:', email);
    //   });

    this.myForm
      .get('email')!
      .valueChanges.pipe(debounceTime(3000))
      .subscribe((email) => {
        console.log('Debounced email:', email);
      });
  }

  ngOnDestroy() {
    if (this.valueChangesSubscription) {
      this.valueChangesSubscription.unsubscribe();
    }
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
