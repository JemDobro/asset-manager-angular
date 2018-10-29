import { Component, OnInit, Input } from '@angular/core';
//pull the Request class from models.ts
import { Request } from '../models';

import { RequestsService } from '../_services/requests.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  // Accept user input as a variable
  _requests: any;

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

}

