import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './new-property.component.html',
  styleUrls: ['./new-property.component.scss']
})
export class NewPropertyComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  setImages(event: any){
   console.log(event)
  }
}
