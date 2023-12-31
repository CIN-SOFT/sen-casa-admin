import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private httpClient: HttpClient) { }

  addNewProgram(newProgram: any){
    let programs = [];
    let storageProgram = localStorage.getItem('casa-program');
    if(storageProgram){
      programs = JSON.parse(storageProgram);
    }
    programs.push(newProgram);
    console.log(programs)
    localStorage.setItem('casa-program', JSON.stringify(programs));
  }

  getAllPrograms(page: number = 1, itemPerPage: number = 50){
    let storageProgram = localStorage.getItem('casa-program');
    let programs = [];
    if(storageProgram){
      programs = JSON.parse(storageProgram);
    }
    return of(programs);
  }
}
