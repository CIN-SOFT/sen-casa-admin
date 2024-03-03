import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Credentials } from 'src/app/interfaces/credentials.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  })
  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) { }

  processLogin(){
    if(this.loginForm.invalid){
      this.toastr.error('Formulaire invalid', 'Merci de renseigner correctement le formulaire');
      return;
    }

    this.authService.login(this.loginForm.value).subscribe({
        next: (resp: any) => {
          localStorage.setItem("sene-casa-token", resp.data.access_token)
          this.toastr.success('Connexion réussi');
        this.router.navigate(["/admin/dashboard"])
        },
        error: (error: any) => {
          this.toastr.error('Echec Connexion', 'La connexion a échoué. Merci de réessayer');
        }
    })
  }

}
