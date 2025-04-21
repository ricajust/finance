import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../shared/material/material.module';
import { BanksRoutingModule } from './banks-routing.module';
import { BanksComponent } from './banks/banks.component';


@NgModule({
  declarations: [
    BanksComponent
  ],
  imports: [
    CommonModule,
    BanksRoutingModule,
    MaterialModule
  ]
})
export class BanksModule { }
