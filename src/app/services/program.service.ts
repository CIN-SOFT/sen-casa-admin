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
   return this.http.post(`${environment.apiUrl}casa/program`, newProgram).pipe(response => response);
  }

  getAllPrograms(page: number = 1, itemPerPage: number = 50){
    return this.http.get(`${environment.apiUrl}casa/program`).pipe(response => response);
  }
}
