import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import {MatButtonModule} from '@angular/material';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [LogoComponent],
  exports: [
    LogoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ]
})
export class LogoModule { }
