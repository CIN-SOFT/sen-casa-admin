import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faEye, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  faEye = faEye;
  faTrash = faTrashCan;
  modalVisible: boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Take current queryParameters from the activated route snapshot
    const urlParameters = Object.assign({}, this.route.snapshot.queryParams); 
    console.log(urlParameters['status'])
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
