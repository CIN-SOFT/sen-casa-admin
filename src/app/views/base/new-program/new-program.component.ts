import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BooleanInput } from '@angular/cdk/coercion';
import Swal from 'sweetalert2';
import { ProgramService } from 'src/app/services/program.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './new-program.component.html',
  styleUrls: ['./new-program.component.scss']
})
export class NewProgramComponent implements OnInit {

  programFrom = new FormGroup({
   // id: new FormControl(undefined),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    location: new FormControl(null),
    lat: new FormControl(null),
    lng: new FormControl(null),
    projet: new FormControl(null, Validators.required),
    property_no: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    status: new FormControl('active'),
    //images: new FormControl([], Validators.required)
  });
  modalVisible: BooleanInput = false;
  planImage: any;
  allImages: any[] = []
  constructor(private programService: ProgramService, private router: Router) {}

  get name() { return this.programFrom.get('name'); }
  get location() { return this.programFrom.get('location'); }
  get lat() { return this.programFrom.get('lat'); }
  get projet() { return this.programFrom.get('projet'); }
  get property_no() { return this.programFrom.get('property_no'); }
  get description() { return this.programFrom.get('description'); }

  ngOnInit(): void {}

  setImages(event: any){
    console.log(event.length)
    if(event.length > 0){
      for(let img of event){
        this.allImages.push({ 'type': 'house', 'name': img})
      }

    }
  }

  setPlanImage(event: any){
    this.planImage = {'type': 'plan', 'name': event};
  }

  checkFormField(){
    if(this.programFrom.invalid){
      this.programFrom.markAllAsTouched();
      return;
    }
    console.log(this.allImages)
    if(this.allImages.length == 0){
      return;
    }
    this.allImages.push(this.planImage)
    let data = {
      "images": this.allImages,
      ...this.programFrom.value
    }

    Swal.fire({
      title: "Voulez-vous vraiment ajouter ce programme ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "OUI, je confirme",
      denyButtonText: `Non, je modifie`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.programService.addNewProgram(data).subscribe({
          next: (resp: any) => {
            this.programFrom.reset();
            Swal.fire("Le programme é été ajouté avec succès et est maintenant visible!", "", "success");
            this.router.navigate(['/admin/base/programs']);
          },
          error: (error) => {
            console.log(error)
            Swal.fire("Oupss! Une erreur est survenu mer", "", "info");
          }
        })

      }
    });
  }
}
