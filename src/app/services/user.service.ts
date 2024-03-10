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
    return this.http.get(`${environment.apiUrl}users/admin/accounts`).pipe(response => response);
  }
  getClientAccountDetails(id: number) {
    return this.http.get(`${environment.apiUrl}users/admin/account/${id}`).pipe(response => response);
  }

  validateAccount(data: any){
    return this.http.put(`${environment.apiUrl}users/admin/accounts/${data.id}`, data).pipe(response => response);
  }

  rejectAccount(data: any){
    return this.http.post(`${environment.apiUrl}users/admin/review/account`, data).pipe(response => response);
  }

  getConnectUserInfo(){
    return this.http.get(`${environment.apiUrl}/users/info`).pipe(response => response);
  }
}
