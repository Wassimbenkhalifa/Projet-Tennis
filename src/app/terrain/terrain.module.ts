import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTerrainComponent } from './add-terrain/add-terrain.component';
import { AllTerrainComponent } from './all-terrain/all-terrain.component';



@NgModule({
  declarations: [
    AddTerrainComponent,
    AllTerrainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TerrainModule { }
