import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {Request } from "../models";
import { REQUESTS } from '../mock-data';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  constructor() { }

  // Create a new empty request, which is referenced in our form
  request = new Request();
  // Declare that the form has not been submitted
  submitted = false;
  // Import mock data to the requests list
  _requests = REQUESTS;

  submitForm = form => {
    // declare that the form has been submitted
    this.submitted = true;
    const update_requests = this._requests;
    // Add requests submitted through the form to the list of requests displayed on the page
    update_requests.push({
      type: form.value.type,
      model: form.value.model,
      version: form.value.version,
      quantity: form.value.quantity,
      start: form.value.start,
      end: form.value.end,
      status: form.value.status,
      userId: form.value.userId
    })
  }
  ngOnInit() {
  }

}
