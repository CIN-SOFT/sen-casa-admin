import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http: HttpClient) { }

  addNewProgram(newProgram: any){
    return this.http.post(`${environment.apiUrl}admin/programs`, newProgram).pipe(response => response);
  }

  getAllPrograms(page: number = 1, itemPerPage: number = 50){
    return this.http.get(`${environment.apiUrl}admin/programs`).pipe(response => response);
  }

  getAllSubscription(page: number = 1, itemPerPage: number = 50){
    return this.http.get(`${environment.apiUrl}casa/subscription/all`).pipe(response => response);
  }
}
