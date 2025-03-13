import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../Environment/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeseviceService {

  constructor(private readonly httpClient:HttpClient) { }

getproducts(): Observable<any> {
  return this.httpClient.get(`${environment.baseUrl}/api/v1/products`)
}
getcategory(): Observable<any> {
  return this.httpClient.get(`${environment.baseUrl}/api/v1/categories`)
}

}
