import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faEye, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ProgramService } from 'src/app/services/program.service';
import Swal from 'sweetalert2';
import { Program } from '../../../interfaces/program.interface';
import { PropertyService } from 'src/app/services/property.service';
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
  programs: Program[] = [];

  constructor(private programService: ProgramService) {}

  ngOnInit(): void {
    this.getPrograms()
  }

  getPrograms(){
    this.programService.getAllPrograms().subscribe({
      next: (resp: any) => {
        this.programs = resp.data;
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