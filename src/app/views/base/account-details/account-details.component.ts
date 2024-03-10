import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService } from '@coreui/angular';
import { faEye, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  faEye = faEye;
  faTrash = faTrashCan;
  modalVisible: boolean = false;
  account: any;
  processingRequest: boolean = false;
  accountId: number | undefined;
  userComments: any[] = []
  fileApiUrl: string = environment.filesApiUrl;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.accountId = Number(this.route.snapshot.paramMap.get('id'));
    this.getAccountDetails(this.accountId)
  }

  getAccountDetails(id: number){
    this.userService.getClientAccountDetails(id).subscribe({
        next: (resp: any) => {
          this.account = resp.data
          this.userComments = this.account.review
        }
      })
  }

  validateAccount(){
    let req = {
      'account_status': 'active',
      'id': this.accountId
    }
    this.processingRequest = true
    this.userService.validateAccount(req).subscribe({
      next: (resp: any) => {
        if (!resp.error) {
          this.toastr.success("Profil validé avec succès")
          this.account.account_status = 'active';
        }else{
          this.toastr.error(resp.message)
        }
        this.processingRequest = false
      },
      error: () => {
        this.processingRequest = false
      }
    })
  }

  rejectAccount(comment: string){
    if(!comment){
      this.toastr.error("Merci de rédiger un commentaire");
      return;
    }
    let data = {
      'comment': comment,
      'status': 'open',
      'client_account_id': this.accountId
    }
    this.processingRequest = true
    this.userService.rejectAccount(data).subscribe({
      next: (resp: any) => {
        if(!resp.error){
          this.userComments.push(resp.data)
        }
        this.processingRequest = false
      },
      error: () => {
        this.processingRequest = false
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
