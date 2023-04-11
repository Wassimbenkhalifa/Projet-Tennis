import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './delete/delete.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    DeleteComponent,
    FormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactsModule { }
