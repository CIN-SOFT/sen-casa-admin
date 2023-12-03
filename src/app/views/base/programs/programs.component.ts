import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faEye, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  faEye = faEye;
  faTrash = faTrashCan;
  faPlus = faPlus;
  modalVisible: boolean = false;
  modalModalDetailsVisible: boolean = false;
  programFrom = new FormGroup({
    id: new FormControl(undefined),
    name: new FormControl('', Validators.required),
    status: new FormControl(null),
    zone: new FormControl(null),
    image: new FormControl('', Validators.required)
 });
  constructor() {}

  ngOnInit(): void {}

  setImages(event: any){
   console.log(event)
  }

  toggleAddModal(){
     this.modalVisible = !this.modalVisible;
  }
  toggleDetailsModal(){
    this.modalModalDetailsVisible = !this.modalModalDetailsVisible;
 }

  toggleModalVisibility(value: boolean){
    this.modalVisible = value;
    this.modalModalDetailsVisible = value;
  }
}
