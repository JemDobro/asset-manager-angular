import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RequestsService } from './_services/requests.service';
// import { UsersService } from './_services/users.service';

import { AppComponent } from './app.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { LoginFormComponent } from './login-form/login-form.component';
// import { CreateAccountFormComponent } from './create-account-form/create-account-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestFormComponent,
    DashboardComponent,
    // LoginFormComponent,
    // CreateAccountFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RequestsService/*, UsersService */],
  bootstrap: [AppComponent]
})
export class AppModule { }
