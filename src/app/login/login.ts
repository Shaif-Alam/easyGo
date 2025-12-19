import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule,MatIconModule,MatTabsModule,MatToolbarModule, ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  isMobile = window.innerWidth < 768;
loginData = {
    email: '',
    password: ''
  };

  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  goBack() {
  window.history.back();
}
  login() {
    this.loading = true;

    this.authService.login(this.loginData).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        alert('Login successful');
        this.router.navigate(['/']);
        this.loading = false;
      },
      error: (err) => {
        alert(err.error?.message || 'Login failed');
        this.loading = false;
      }
    });
  }
}
