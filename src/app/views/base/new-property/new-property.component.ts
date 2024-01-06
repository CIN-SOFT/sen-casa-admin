import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Program } from 'src/app/interfaces/program.interface';
import { ProgramService } from 'src/app/services/program.service';
import { PropertyService } from 'src/app/services/property.service';
import Swal from 'sweetalert2';

@Component({
  templateUrl: './new-property.component.html',
  styleUrls: ['./new-property.component.scss']
})
export class NewPropertyComponent implements OnInit {
  propertyForm: FormGroup = new FormGroup({
    casa_programs_id: new FormControl(null, [Validators.required]),
    property_number: new FormControl(null, [Validators.required]),
    //location: new FormControl(null, [Validators.required]),
    area: new FormControl(null, [Validators.required]),
    //bed: new FormControl(null, [Validators.required]),
  //  bath: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
   // minimum_save: new FormControl(null, [Validators.required]),
    //payment_duration: new FormControl(null, [Validators.required]),
   // planImage: new FormControl(null),
    //principalImage: new FormControl(null),
    images: new FormControl([], [Validators.required]),
    description: new FormControl(null, [Validators.required])
  });

  programs: Program[] = [];
  
  constructor(private programService: ProgramService, private propertyService: PropertyService, private router: Router) {}

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

  getSelectedProgram(event: any){
  //  this.propertyForm.get('location')?.setValue(this.programs.find(p => {
  //     return p.id == this.propertyForm.get('casa_programs_id')?.value
  //   })?.location);
  }

  setImages(event: any){
   let otherImages = Object.assign([], event);
   
   this.propertyForm.get('planImage')?.setValue(otherImages.pop())
   this.propertyForm.get('principalImage')?.setValue(otherImages.shift())
   
   this.propertyForm.get('images')?.setValue(event)
  }

  checkFormFields(){
    if(this.propertyForm.invalid){
      this.propertyForm.markAllAsTouched()
      return;
    }
    Swal.fire({
      title: "Voulez-vous vraiment ajouter cette propriete ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "OUI, je confirme",
      denyButtonText: `Non, je modifie`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.propertyService.addNewProperty(this.propertyForm.value).subscribe({
          next: (resp: any) => {
            Swal.fire("L'ajout a été ajouté avec succès et est maintenant visible!", "", "success");
            this.propertyForm.reset();
            this.router.navigate(['/base/properties']);
          },
          error: () => {
            Swal.fire("Oupss! Une erreur est survenu mer", "", "info");
          }
        })

      }
    });
  }
}
