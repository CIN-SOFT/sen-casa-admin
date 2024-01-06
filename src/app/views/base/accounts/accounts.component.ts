import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faEye, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';

@Component({
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  faEye = faEye;
  faTrash = faTrashCan;
  modalVisible: boolean = false;
  accounts: any[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // Take current queryParameters from the activated route snapshot
    const urlParameters = Object.assign({}, this.route.snapshot.queryParams); 
    console.log(urlParameters['status'])
    this.getAccounts()
  }

  getAccounts(){
      this.userService.getAllClientAccount().subscribe({
        next: (resp: any) => {
          this.accounts = resp.data;
        }
      })
  }

  toggleUserDetails(){
    this.modalVisible = !this.modalVisible;
  }

  setImages(event: any){
   console.log(event)
  }

  handleVisibilityModal(event: any) {
    this.modalVisible = event;
  }
}
