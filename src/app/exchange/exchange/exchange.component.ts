import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Inject, OnInit } from '@angular/core';
import { Exchanges } from 'src/app/brokers/models/exchange';

import { ExchangeService } from '../exchange.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DetailsDialogComponent } from 'src/app/shared/components/details-dialog/details-dialog.component';
import { DialogData } from '../models/dialog-data';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ExchangeComponent implements OnInit {

  exchanges: any[] = [];
  exchange: any = {};
  dataSource: any[] = [];
  displayedColumns = ['simbolo', 'nome', 'tipo_moeda', 'action'];

  constructor(
    private readonly exchangeService: ExchangeService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllExchanges();
  }

  getAllExchanges() {
    const item = localStorage.getItem("exchange");
    if (!item) {
      this.exchangeService
        .getExchanges()
        .subscribe(response => {
          const data = {value: response, expiration: Date.now() + 40000 };
          localStorage.setItem("exchange", JSON.stringify(data));
          this.exchanges = response;
        });
    } else {
      this.exchanges = item ? JSON.parse(item).value : [];
    }
    this.dataSource = this.exchanges;
  }

  openDialog(response: any) {
    this.dialog.open(DetailsDialogComponent, {panelClass: 'custom-dialog-class', data: response?.cotacoes});
  }

  getExchange(element: any){
    this.exchangeService.getExchange(element).subscribe(response => this.openDialog(response));
  }

}

export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
