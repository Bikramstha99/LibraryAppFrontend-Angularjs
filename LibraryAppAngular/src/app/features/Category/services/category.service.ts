import { Injectable } from '@angular/core';
import { AddBook } from '../models/add-book.model';
import { GetBook } from '../models/get-book';
import { Observable, ObservableNotification } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetComment } from '../models/get-comment';
import { AddComment } from '../models/add-comment';
import { UpdateBook} from '../models/update-book';




@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 

  constructor(private http:HttpClient) { }
  
  addCategory(model:FormData):Observable<void>{
    return this.http.post<void>(`https://localhost:7169/api/Book/Create`,model)
  }
  
  getBook():Observable<GetBook[]>{
    return this.http.get<GetBook[]>(`https://localhost:7169/api/Book/GetAllBooks`)
  }
 
  getBookById(id: number): Observable<GetBook> {
    return this.http.get<GetBook>(`https://localhost:7169/api/Book/GetById?id=${id}`)
  }
  getBookEditById(id: number): Observable<UpdateBook> {
    return this.http.get<UpdateBook>(`https://localhost:7169/api/Book/GetById?id=${id}`)
  }
 
  updateBook(model:FormData):Observable<void>{
    return this.http.post<void>(`https://localhost:7169/api/Book/Edit`,model)
  }
  deleteBook(id: number):Observable<void>{
    return this.http.delete<void>(`https://localhost:7169/api/Book/delete?id=${id}`)
  }

  
  //comment
  getCommentByBookId(BookId: number):Observable<GetComment[]>{
    debugger
    return this.http.get<GetComment[]>(`https://localhost:7169/api/Comment/GetCommentByBookId?BookId=${BookId}`)
  }
  addCommentByBookId(BookId: number,comment:AddComment):Observable<GetComment[]>{
    debugger
    return this.http.post<GetComment[]>(`https://localhost:7169/api/Comment/CreateBookComment?BookId=${BookId}`,comment)
  }

  
}