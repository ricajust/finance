import { Component, OnInit } from '@angular/core';
import { BrokersService } from '../brokers.service';

@Component({
  selector: 'app-brokers',
  templateUrl: './brokers.component.html',
  styleUrls: ['./brokers.component.scss']
})
export class BrokersComponent implements OnInit {

  brokers: any[] = [];
  panelOpenState = false;

  constructor(private readonly brokersService: BrokersService) { }

  ngOnInit(): void {
    this.getAllBrokers();
  }

  getAllBrokers() {
    const item = localStorage.getItem("brokers");
    if (!item) {
      this.brokersService
        .getBrokers()
        .subscribe(response => {
          const data = {value: response, expiration: Date.now() + 40000 };
          localStorage.setItem("brokers", JSON.stringify(data));
          this.brokers = response;
        });
    } else {
      this.brokers = item ? JSON.parse(item).value : [];
    }
  }

}
