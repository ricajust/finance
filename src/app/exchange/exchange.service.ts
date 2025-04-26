import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  private readonly URI: string = "https://brasilapi.com.br/api/cambio/v1/moedas";
  private readonly URI_COTACAO: string = "https://brasilapi.com.br/api/cambio/v1/cotacao";

  constructor(private readonly httpClient: HttpClient) { }

  getExchanges(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.URI);
  }

  getExchange(moeda: string, date?: Date): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.URI_COTACAO}/${moeda}/${this.getFormattedDate(date)}`);
  }

  getFormattedDate(date?: Date): string {
    let today: any, year: any, mounth: any, day: any;
    if (!date) {
      today = new Date();
      year = today.getFullYear();
      mounth = String(today.getMonth() + 1).padStart(2, '0'); // Adiciona zero à esquerda se necessário
      day = String(today.getDate()).padStart(2, '0'); // Adiciona zero à esquerda se necessário
    }
    return `2025-04-14`;
    // return `${year}-${mounth}-${day}`;
  }

}
