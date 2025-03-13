import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../Environment/environment';

@Injectable({
  providedIn: 'root'
})
export class FinorderService {
  myToken: any = localStorage.getItem('userToken')

  constructor(private httpClient: HttpClient) { }


  getAllOrders(id:string): Observable<any> {
    return this.httpClient.get(environment.baseUrl+`/api/v1/orders/user/${id}`)
  }







}
