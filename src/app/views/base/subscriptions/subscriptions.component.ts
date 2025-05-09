import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faEye, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ProgramService } from 'src/app/services/program.service';

@Component({
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {
  faEye = faEye;
  faTrash = faTrashCan;
  modalVisible: boolean = false;
  subscriptions: any[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private programService: ProgramService
  ) {}

  ngOnInit(): void {
    // Take current queryParameters from the activated route snapshot
    const urlParameters = Object.assign({}, this.route.snapshot.queryParams); 
    console.log(urlParameters['status'])
  }

  getSubscriptions(){
    this.programService.getAllSubscription().subscribe({
      next: (resp: any) => {
        this.subscriptions = resp.data;
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
