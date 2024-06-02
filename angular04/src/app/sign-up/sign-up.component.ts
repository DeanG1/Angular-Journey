import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], // Added email validator
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      this.http
        .post('/api/signup', this.signUpForm.value) // Use '/api' to match the proxy
        .subscribe({
          next: (response) => {
            console.log('Sign-up successful', response);
          },
          error: (error) => {
            console.error('Sign-up failed', error);
          },
        });
    }
  }
}
