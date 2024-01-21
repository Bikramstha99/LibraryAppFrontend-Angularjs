import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { AddBook } from '../models/add-book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent {
  book!:AddBook;
  private readonly route = inject(ActivatedRoute);
  private readonly router=inject(Router);
  constructor(private categoryService:CategoryService){
    this.book={
      BookName:"",
      Writer:"",
      Genre:"",
      releaseDate:new Date(),
      BookImage:null,
      
    };}
    onFileChange(event:any){
      if(event.target.files && event.target.files.length>0){ 
        const file = event.target.files[0]; 
        this.book.BookImage = file;
      }
    
  };
  onFormSubmit(){
    debugger
    const formData = new FormData();
    formData.set("BookName",this.book.BookName);
    formData.set("Writer",this.book.Writer);
    formData.set("Genre",this.book.Genre);
    if (this.book.releaseDate !== null) {
      formData.set("ReleasedDate", new Date(this.book.releaseDate).toISOString());
  } else {
      formData.set("ReleasedDate", ''); 
  }
  if(this.book.BookImage){

    formData.append('BookImage',this.book.BookImage,this.book.BookImage.name);
  }
  
formData.forEach(val => console.log(val));
    this.uploadFormData(formData);
  }


  uploadFormData(formData:FormData){
    this.categoryService.addCategory(formData)
    .subscribe({
      next: (response) => {
        console.log("Successful!!!",response);
        this.router.navigate(['admin/categories']);
      },
      error: (error) => {
        console.log("Error occured",error);
      } 

    });

  }

}
