import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPlanificationComponent } from './add-planification/add-planification.component';
import { AllPlanificationComponent } from './all-planification/all-planification.component';
import { EditPlanificationComponent } from './edit-planification/edit-planification.component';



@NgModule({
  declarations: [
    AddPlanificationComponent,
    AllPlanificationComponent,
    EditPlanificationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlanificationModule { }
