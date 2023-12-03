import { Component, OnInit } from '@angular/core';
import { faEye, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent implements OnInit {
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
