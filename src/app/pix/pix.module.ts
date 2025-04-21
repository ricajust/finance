import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../shared/material/material.module';
import { PixRoutingModule } from './pix-routing.module';
import { PixComponent } from './pix/pix.component';


@NgModule({
  declarations: [
    PixComponent
  ],
  imports: [
    CommonModule,
    PixRoutingModule,
    MaterialModule
  ]
})
export class PixModule { }
