import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigieHeaderComponent } from './sigie-header/sigie-header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SigieNavbarComponent } from './sigie-navbar/sigie-navbar.component';
import { AppMaterialModule } from '../app-material/app-material.module';



@NgModule({
  declarations: [
    SigieHeaderComponent,
    SigieNavbarComponent
  ],
  imports: [
    CommonModule, 
    FlexLayoutModule, 
    AppMaterialModule
  ], 
  exports: [
   SigieHeaderComponent,
   SigieNavbarComponent
  ]
})
export class CoreModule { }
