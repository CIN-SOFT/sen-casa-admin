import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faEye, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ProgramService } from 'src/app/services/program.service';
import Swal from 'sweetalert2';
import { Program } from '../../../interfaces/program.interface';
import { PropertyService } from 'src/app/services/property.service';
import { environment } from 'src/environments/environment';
import { TransactionService } from 'src/app/services/transaction.service';
@Component({
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  faEye = faEye;
  faTrash = faTrashCan;
  faPlus = faPlus;
  modalVisible: boolean = false;
  modalModalDetailsVisible: boolean = false;
  transactions: any[] = [];
  imagesApiUrl: string = environment.imagesApiUrl
  planImage: string = "";
  constructor(private programService: ProgramService, private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.getAllTransactions()
  }



  getAllTransactions(){
    this.transactionService.getLastTransactions(1, 50).subscribe({
      next: (resp: any) => {
         if(!resp.error){
          this.transactions = resp.data;
         }
      }
    })
  }

  setImages(event: any){
   console.log(event)
  }

  toggleAddModal(){
     this.modalVisible = !this.modalVisible;
     Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }
  toggleDetailsModal(){
    this.modalModalDetailsVisible = !this.modalModalDetailsVisible;
 }

  toggleModalVisibility(value: boolean){
    this.modalVisible = value;
    this.modalModalDetailsVisible = value;
  }
}
