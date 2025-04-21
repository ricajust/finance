import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'finance';

  ngOnInit(): void {
    this.checkLocalStorageExpiration();
  }

  checkLocalStorageExpiration() {
    const item = localStorage.getItem("banks");
    if (item) {
      const data = JSON.parse(item);
      if (data.value.length != 0 && (Date.now() > data.expiration)) {
        localStorage.removeItem("banks");
        console.log("Cache expirado e removido!");
      }
    }
  }
}
