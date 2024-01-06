import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get(`${environment.apiUrl}casa/users`).pipe(response => response);
  }

  addUser(user: any){
    return this.http.post(`${environment.apiUrl}casa/users`, user).pipe(response => response);
  }

  getAllClientAccount(){
    return this.http.get(`${environment.apiUrl}casa/client/account`).pipe(response => response);
  }
}
