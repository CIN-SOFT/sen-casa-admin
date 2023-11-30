import { Component, OnInit } from '@angular/core';
import { faEye, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  faEye = faEye;
  faTrash = faTrashCan;
  constructor() {}

  ngOnInit(): void {}

  setImages(event: any){
   console.log(event)
  }
}
