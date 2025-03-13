import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../Environment/environment';
// import { jwtDecode } from './../../../../../node_modules/jwt-decode/build/esm/index.d';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  router=inject(Router)

  userData: any = null

  sendRegesterForm(data: object): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}/api/v1/auth/signup`, data)
  }
  sendLoginForm(data: object): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}/api/v1/auth/signin`, data)
  }

  saveUserData(): void {

    if (localStorage.getItem('userToken') !== null) {

      this.userData = jwtDecode(localStorage.getItem('userToken')!)
      console.log("user", this.userData);

    }

  }

signOut():void{
  localStorage.removeItem('userToken')
  this.userData=null
  this.router.navigate(['/login'])
}



setEmailVerify(data:object):Observable<any>{
  return this.httpClient.post(`${environment.baseUrl}/api/v1/auth/forgotPasswords`,data)
}
setCodeVerify(data:object):Observable<any>{
  return this.httpClient.post(`${environment.baseUrl}/api/v1/auth/verifyResetCode`,data)
}
resetPass(data:object):Observable<any>{
  return this.httpClient.put(`${environment.baseUrl}/api/v1/auth/resetPassword`,data)
}



}

