import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEye, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  faEye = faEye;
  faTrash = faTrashCan;
  modalModalDetailsVisible: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  setImages(event: any){
   console.log(event)
  }

  toggleDetailsModal(property: any){
    this.router.navigate(['/base/property/details', property.id])
 }

  
}
