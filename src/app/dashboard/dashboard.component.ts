import { Component, OnInit, Input } from '@angular/core';
//pull the Request class from models.ts
import { Request } from '../models';

import { RequestsService } from '../_services/requests.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  _requests: any;
  requesting: boolean = false;

  constructor(private requestsService: RequestsService) { }

  ngOnInit() {
    this.getRequests();
  }

  getRequests(): void {
    this.requestsService.getRequests()
      .subscribe(requests => this._requests = requests);
  }

  getFilteredRequest(status) {
    return this._requests.filter(request => request.status === status)
  }

  toggleRequestForm() {
    this.requesting = !this.requesting;
  } 

}
