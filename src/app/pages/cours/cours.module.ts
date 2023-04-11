import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCoursComponent } from './add-cours/add-cours.component';
import { AllCoursComponent } from './all-cours/all-cours.component';
import { EditCoursComponent } from './edit-cours/edit-cours.component';



@NgModule({
  declarations: [
    AddCoursComponent,
    AllCoursComponent,
    EditCoursComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoursModule { }
