import { environment } from './../../Environment/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  myToken: any = localStorage.getItem('userToken')

  constructor(private httpClient:HttpClient) { }

  addPrudectToWish(id:string):Observable<any>{
    return this.httpClient.post( environment.baseUrl + `/api/v1/wishlist` ,{
        "productId": id
    },{
      headers:{
        token:this.myToken
      }
    })
  }

  getUserWish(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/api/v1/wishlist', {
      headers: {
        token: this.myToken
      }
    })
  }



  removeProduct(id:string):Observable<any>{
    return this.httpClient.delete(environment.baseUrl+`/api/v1/wishlist/${id}`,{
      headers:{
        token:this.myToken
      }
    })
  }





}
