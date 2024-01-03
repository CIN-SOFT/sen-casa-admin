import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faEye, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  faEye = faEye;
  faTrash = faTrashCan;
  faPlus = faPlus;
  modalVisible: boolean = false;
  users: any;
  userForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    role: new FormControl('validator'),
    status: new FormControl('active'),
    phone: new FormControl(null, [Validators.required])
  })
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe({
      next: (resp:  any) => {
        this.users = resp.data;
      }
    })
  }

  checkFormField(){
    console.log(this.userForm)
    if(this.userForm.invalid){
      
      Swal.fire("Formulaire invalide ", "", "error");
      return;
    }
    Swal.fire({
      title: "Voulez-vous vraiment ajouter cet utilisateur ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "OUI, je confirme",
      denyButtonText: `Non, je modifie`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.userService.addUser(this.userForm.value).subscribe({
          next: (resp: any) => {
            this.users.push(resp.data)
            this.userForm.reset();
            Swal.fire("Utilisateur ajouté avec succès ", "", "success");
            this.modalVisible = false;     
          }
        })
       
           
      } else if (result.isDenied) {
        Swal.fire("Oupss! Une erreur est survenu mer", "", "info");
      }
    });
   
  }
  
  toggleAddModal(){
    this.modalVisible = !this.modalVisible;
  }

 

  handleVisibilityModal(event: any) {
    this.modalVisible = event;
  }
}
