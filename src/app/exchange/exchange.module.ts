import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExchangeRoutingModule } from './exchange-routing.module';
import { ExchangeComponent } from './exchange/exchange.component';
import { MaterialModule } from '../shared/material/material.module';


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
