import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEye, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Program } from 'src/app/interfaces/program.interface';
import { Property } from 'src/app/interfaces/property.interface';
import { ProgramService } from 'src/app/services/program.service';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  faEye = faEye;
  faTrash = faTrashCan;
  faPlus = faPlus;
  modalModalDetailsVisible: boolean = false;
  programs: Program[] = [];
  properties: any[] = [];
  
  constructor(private router: Router, private programService: ProgramService, private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.getPrograms()
    this.getProperties()
  }

  getPrograms(){
    this.programService.getAllPrograms().subscribe({
      next: (resp: any) => {
        this.programs = resp.data;
      }
    })
  }

  getProperties(){
    this.propertyService.getProperties().subscribe({
      next: (resp: any) => {
        this.properties = resp.data;
      }
    })
  }

  setImages(event: any){
   console.log(event)
  }

  openAddNewProperty(){
    this.router.navigate(['/base/property/add'])
  }
  toggleDetailsModal(property: any){
    this.router.navigate(['/base/property/details', property.id])
 }

  
}
