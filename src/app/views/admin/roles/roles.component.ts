import { Component, OnInit } from '@angular/core';
import { faEye, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  faEye = faEye;
  faTrash = faTrashCan;
  faPlus = faPlus;
  modalVisible: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  setImages(event: any){
   console.log(event)
  }

  toggleAddModal(){
    this.modalVisible = !this.modalVisible;
  }

 

  handleVisibilityModal(event: any) {
    this.modalVisible = event;
  }
}
