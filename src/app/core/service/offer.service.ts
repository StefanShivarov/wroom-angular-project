import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IOffer } from '../interfaces/offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private httpClient: HttpClient) { }

  getUserOffers$(userId: number): Observable<IOffer[]>{
    
    return this.httpClient.get<IOffer[]>(`${environment.apiUrl}/offers?userId=${userId}`);
  }

  getLatestOffers$(): Observable<IOffer[]>{
    return this.httpClient.get<IOffer[]>(`${environment.apiUrl}/offers/latest`);
  }

  getOfferById$(id: number): Observable<IOffer>{
    return this.httpClient.get<IOffer>(`${environment.apiUrl}/offers/${id}`);
  }

  getAllOffers$(): Observable<IOffer[]>{
    return this.httpClient.get<IOffer[]>(`${environment.apiUrl}/offers`);
  }
}
