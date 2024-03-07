import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { brandSet,  flagSet, freeSet} from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';

@Component({
  selector: 'app-single-image-upload',
  templateUrl: './single-image-upload.component.html',
  styleUrl: './single-image-upload.component.scss'
})
export class SingleImageUploadComponent implements OnInit{
  private _options: any;
  private _image: string = "";

  @Output() imageLoader = new EventEmitter<string[]>();
  constructor(public iconSet: IconSetService){
    iconSet.icons = { ...freeSet, ...brandSet, ...flagSet };
  }

  @Input()
  set options(options: any){
    this._options = options;
  }

  get options(){
    return this._options;
  }

  @Input()
  set image(img: any){
    this._image = img || "";
  }

  get image(){
    return this._image;
  }

  ngOnInit(){

  }

  onFileChange(event: any){
    for(let file of event.target.files){
      const reader = new FileReader();
      reader.onloadend = () => {
          this.image = reader.result
          // if(reader.result)
          //   console.log(btoa(reader.result.toString()))
      };
      reader.readAsDataURL(file);
     // reader.readAsBinaryString(file)
      //console.log(reader.result)
    }
    setTimeout(() => {
      if(this.image != ""){
        this.sendImages()
      }
    }, 2000)
  }

  async getBase64Image(img: string) {
      const data = await fetch(img);
      const blob = await data.blob();
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result;
          resolve(base64data);
        };
        reader.onerror = reject;
      });
  }


  sendImages(){
    this.imageLoader.emit(this.image)
  }

  removeImage(){
    this.image = ""
    this.sendImages()
  }
}
