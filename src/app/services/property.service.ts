import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) { }

  addNewProperty(property: any){
    return this.http.post(`${environment.apiUrl}casa/properties`, property).pipe(response => response);
  }

  getProperties(){
    return this.http.get(`${environment.apiUrl}casa/properties`).pipe(response => response);
  }
}
