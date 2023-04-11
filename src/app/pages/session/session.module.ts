import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSessionComponent } from './add-session/add-session.component';
import { AllSessionComponent } from './all-session/all-session.component';
import { ShowSessionComponent } from './show-session/show-session.component';



@NgModule({
  declarations: [
    AddSessionComponent,
    AllSessionComponent,
    ShowSessionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SessionModule { }
