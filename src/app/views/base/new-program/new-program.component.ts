import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './new-program.component.html',
  styleUrls: ['./new-program.component.scss']
})
export class NewProgramComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  setImages(event: any){
   console.log(event)
  }
}
