import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrokersService {

  private readonly URI: string = "https://brasilapi.com.br/api/cvm/corretoras/v1";

  constructor(private readonly httpClient: HttpClient) { }

  getBrokers(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.URI);
  }

}
