import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../Environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private readonly httpClient :HttpClient) { }


getAllProducts():Observable<any>{
  return this.httpClient.get(`${environment.baseUrl}/api/v1/products`)
}
getSpecificProducts(id:any):Observable<any>{
  return this.httpClient.get(`${environment.baseUrl}/api/v1/products/${id}`)
}



}
