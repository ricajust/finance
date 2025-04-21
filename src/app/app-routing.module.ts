import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "bancos", pathMatch: "full" },
  { path: "bancos", loadChildren: () => import("./banks/banks.module").then(module => module.BanksModule) },
  { path: "corretoras", loadChildren: () => import("./brokers/brokers.module").then(module => module.BrokersModule)},
  { path: "cambio", loadChildren: () => import("./exchange/exchange.module").then(module => module.ExchangeModule) },
  { path: "pix", loadChildren: () => import("./pix/pix.module").then(module => module.PixModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
