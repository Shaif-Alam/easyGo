import { Component } from '@angular/core';
import { AuthService } from '../services/auth';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
AuthService
@Component({
  selector: 'app-signup',
  imports: [FormsModule,CommonModule,MatIconModule,MatTabsModule,MatToolbarModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  showConfirmPassword = false;

toggleConfirmPassword() {
  this.showConfirmPassword = !this.showConfirmPassword;
}
signupData = {
  
    email: '',
    password: '',
     Cpassword: ''
  };

  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  signup() {
    this.loading = true;

    this.authService.signup(this.signupData).subscribe({
      next: () => {
        alert('Signup successful');
        this.router.navigate(['/login']);
        this.loading = false;
      },
      error: (err) => {
        alert(err.error?.message || 'Signup failed');
        this.loading = false;
      }
    });
  }
}
