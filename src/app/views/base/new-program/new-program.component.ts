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
    location: new FormControl(null, Validators.required),
    lat: new FormControl(null, Validators.required),
    lng: new FormControl(null, Validators.required),
    status: new FormControl('active'),
    images: new FormControl('', Validators.required)
  });
  modalVisible: BooleanInput = false;

  constructor(private programService: ProgramService, private router: Router) {}

  get name() { return this.programFrom.get('name'); }
  get location() { return this.programFrom.get('location'); }
  get lat() { return this.programFrom.get('lat'); }
  get lng() { return this.programFrom.get('lng'); }
  get principalImage() { return this.programFrom.get('principalImage'); }

  ngOnInit(): void {}

  setImages(event: any){
   this.programFrom.get('images')?.setValue(event);
  }

  checkFormField(){
    if(this.programFrom.invalid){
      console.log(this.programFrom)
      this.programFrom.markAllAsTouched();
      return;
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
        this.programService.addNewProgram(this.programFrom.value).subscribe({
          next: (resp: any) => {
            this.programFrom.reset();
            Swal.fire("Le programme é été ajouté avec succès et est maintenant visible!", "", "success");
            this.router.navigate(['/base/programs']);
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
