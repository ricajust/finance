import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'finance';

  ngOnInit(): void {
    if (localStorage.length > 0){
      this.checkLocalStorageExpiration("banks");
      this.checkLocalStorageExpiration("brokers");
      this.checkLocalStorageExpiration("exchange");
      this.checkLocalStorageExpiration("pix");
    }
  }

  checkLocalStorageExpiration(key: string) {
    const item = localStorage.getItem(key);
    if (item) {
      const data = JSON.parse(item);
      if (data.value.length != 0 && (Date.now() > data.expiration)) {
        localStorage.removeItem(key);
        console.log(`Cache ${key} expirado e removido!`);
      }
    }
  }
}
