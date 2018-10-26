import { Component, OnInit, Input } from '@angular/core';
//pull the Request class from models.ts
import { Request } from '../models';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  // Accept user input as a variable
  @Input() _requests;

  constructor() { }

  ngOnInit() {
  }

}

