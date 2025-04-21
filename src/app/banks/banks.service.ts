import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BanksService {

  private readonly URI = "https://brasilapi.com.br/api/banks/v1";

  constructor(private readonly httpClient: HttpClient) { }

  getBanks(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.URI);
  }
}
