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
    let result = JSON.parse(localStorage.getItem("banks") ?? "");
    if (result.length === 0) {
      this.banksService
        .getBanks()
        .subscribe(response => {
          localStorage.setItem("banks", JSON.stringify(response));
          this.banks = response;
        });
    } else {
      this.banks = result;
    }
  }
}
