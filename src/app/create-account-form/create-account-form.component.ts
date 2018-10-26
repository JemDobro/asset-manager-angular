// import { Component, OnInit } from '@angular/core';
// import { NgForm } from "@angular/forms";
// import { User } from "../models";
// import { USERS } from '../mock-data';

// @Component({
//   selector: 'app-create-account-form',
//   templateUrl: './create-account-form.component.html',
//   styleUrls: ['./create-account-form.component.css']
// })
// export class CreateAccountFormComponent implements OnInit {

//   constructor() { }

//   user = new User();
//   submitted = false;
//   _users = USERS;

//   submitForm = form => {
//     this.submitted = true;
//     const update_users = this._users;
//     update_users.push({
//       firstName: form.value.firstName,
//       lastName: form.value.lastName,
//       username: form.value.username,
//       badgeId: form.value.badgeId,
//       email: form.value.email,
//       password: form.value.password
//     });
//     this._users = update_users;
//   }

//   ngOnInit() {
//   }

// }
