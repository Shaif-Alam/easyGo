import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'https://easygo-backend-project.vercel.app/api/v1';

  constructor(private http: HttpClient) {}

  signup(data: any) {
    return this.http.post(`${this.baseUrl}/admin/registration`, data);
  }

  login(data: any) {
    return this.http.post(`${this.baseUrl}/admin/login`, data);
  }
}
