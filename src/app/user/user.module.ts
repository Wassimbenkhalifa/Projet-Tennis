import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { AllUserComponent } from './all-user/all-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';



@NgModule({
  declarations: [
    AddUserComponent,
    AllUserComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
