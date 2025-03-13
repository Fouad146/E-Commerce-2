import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../Environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient:HttpClient) { }


getBrand(): Observable<any> {
  return this.httpClient.get(`${environment.baseUrl}/api/v1/brands`)
}



}
