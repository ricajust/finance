import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../shared/material/material.module';
import { ExchangeRoutingModule } from './exchange-routing.module';
import { ExchangeComponent } from './exchange/exchange.component';


@NgModule({
  declarations: [
    ExchangeComponent
  ],
  imports: [
    CommonModule,
    ExchangeRoutingModule,
    MaterialModule
  ]
})
export class ExchangeModule { }
