import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { BrokersRoutingModule } from './brokers-routing.module';
import { BrokersComponent } from './brokers/brokers.component';


@NgModule({
  declarations: [
    BrokersComponent
  ],
  imports: [
    CommonModule,
    BrokersRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class BrokersModule { }
