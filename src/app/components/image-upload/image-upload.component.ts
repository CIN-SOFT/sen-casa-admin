import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { brandSet,  flagSet, freeSet} from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrl: './image-upload.component.scss'
})
export class ImageUploadComponent implements OnInit{
  private _options: any;
  private _images = [];

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
  set images(imgs: any){
    this._images = imgs || [];
  }

  get images(){
    return this._images;
  }

  ngOnInit(){
   
  }

  onFileChange(event: any){
    for(let file of event.target.files){
      const reader = new FileReader();
      reader.onloadend = () => {
          this.images.push(reader.result)
      };
      reader.readAsDataURL(file);
    }
    setTimeout(() => {
      if(this.images?.length > 0){
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
    this.imageLoader.emit(this.images)
  }

  removeImage(index: number){
    this.images.splice(index, 1)
    this.sendImages()
  }
}
