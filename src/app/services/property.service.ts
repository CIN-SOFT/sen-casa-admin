import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private httpClient: HttpClient) { }

  addNewProperty(property: any){
    let properties = [];
    let storageProp = localStorage.getItem('casa-properties');
    if(storageProp){
      properties = JSON.parse(storageProp);
    }
    properties.push(property);
    localStorage.setItem('casa-properties', JSON.stringify(properties));
  }

  getProperties(){
    let storageProperties = localStorage.getItem('casa-properties');
    let properties = [];
    if(storageProperties){
      properties = JSON.parse(storageProperties);
    }
    return of(properties);
  }
}
