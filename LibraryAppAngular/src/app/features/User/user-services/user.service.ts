import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetUser } from '../user-models/get-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  // addCategory(model:FormData):Observable<void>{
  //   return this.http.post<void>(`https://localhost:7169/api/Movie/Create`,model)
  // }
  
  getUser():Observable<GetUser[]>{
    debugger
    return this.http.get<GetUser[]>(`https://localhost:7169/api/Users/GetAllUsers`)
  }

  getUserById(userId: number): Observable<GetUser> {
    debugger
    return this.http.get<GetUser>(`https://localhost:7169/api/Users/GetById?userId=${userId}`)
  }

  deleteUser(userId: number):Observable<void>{
    debugger
    return this.http.delete<void>(`https://localhost:7169/api/Users/delete?userId=${userId}`)
  }
}
