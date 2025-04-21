import { Component, OnInit } from '@angular/core';
import { BanksService } from '../banks.service';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.scss']
})
export class BanksComponent implements OnInit {

  banks: any[] = [];

  constructor(private readonly banksService: BanksService) { }

  ngOnInit(): void {
    this.checkAndLoadLocalStorage();
  }

  checkAndLoadLocalStorage() {
    let item = localStorage.getItem("banks");
    if (!item) {
      this.banksService
        .getBanks()
        .subscribe(response => {
          const data = {value: response, expiration: Date.now() + 40000 };
          localStorage.setItem("banks", JSON.stringify(data));
          this.banks = response;
        });
    } else {
      this.banks = item ? JSON.parse(item).value : [];
    }
  }
}
