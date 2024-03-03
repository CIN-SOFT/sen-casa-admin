import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Credentials } from '../interfaces/credentials.interface'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: any) {
    return this.http.post(`${environment.apiUrl}users/auth/login`, user).pipe(response => response);
  }
}
