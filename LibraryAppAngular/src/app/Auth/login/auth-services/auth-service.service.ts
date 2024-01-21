import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableNotification } from 'rxjs';
import { baseUrl } from 'src/environment';
import { userpayload } from '../../../features/Category/models/User';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

  onLogin(obj:any):Observable<void>{
    return this.http.post<void>(`https://localhost:7169/api/Users/Login`,obj)
  }
  onSignUp(obj:any):Observable<void>{
    return this.http.post<void>(`https://localhost:7169/api/Users/SignUp`,obj)
  }

  getRoleFromToken() {
    // localStorage.getItem("token");
    const helper = new JwtHelperService();

    const token = localStorage.getItem('token');

    const decodedToken = helper.decodeToken(token!) as userpayload;

    console.log(decodedToken)
    return decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
}
  getNameFromToken(){
    const helper = new JwtHelperService();

    const token = localStorage.getItem('token');

    const decodedToken = helper.decodeToken(token!) as userpayload;

    console.log(decodedToken)
    return decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]
  }
}
