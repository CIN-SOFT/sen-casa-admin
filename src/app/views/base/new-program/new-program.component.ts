import { Component, OnInit } from '@angular/core';
import { ProgramForm } from '../../../types/programme';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BooleanInput } from '@angular/cdk/coercion';
@Component({
  templateUrl: './new-program.component.html',
  styleUrls: ['./new-program.component.scss']
})
export class NewProgramComponent implements OnInit {

  programFrom = new FormGroup({
     id: new FormControl(undefined),
     name: new FormControl('', Validators.required),
     status: new FormControl(null),
     image: new FormControl('', Validators.required)
  });
  modalVisible: BooleanInput = false;
  constructor() {}

  ngOnInit(): void {}

  setImages(event: any){
   console.log(event)
   this.programFrom.get('image')?.setValue(event);
  }

  handleVisibilityModal($event: boolean) {
    this.modalVisible = $event;
  }
}
