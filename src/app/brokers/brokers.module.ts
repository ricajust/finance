import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../shared/material/material.module';
import { MasksPipe } from '../shared/pipes/masks.pipe';
import { BrokersRoutingModule } from './brokers-routing.module';
import { BrokersComponent } from './brokers/brokers.component';


@NgModule({
  declarations: [
    BrokersComponent,
    MasksPipe
  ],
  imports: [
    CommonModule,
    BrokersRoutingModule,
    MaterialModule
  ]
})
export class BrokersModule { }
