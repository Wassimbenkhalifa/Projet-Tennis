import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LockedComponent } from './locked/locked.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    LockedComponent,
    ForgotPasswordComponent,
    Page404Component,
    Page500Component,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthenticationModule { }
