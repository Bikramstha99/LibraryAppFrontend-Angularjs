import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { UpdateBook } from '../models/update-book';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent {
  updateBook!:UpdateBook;

  id!: string;
  private readonly route = inject(ActivatedRoute);
  private readonly router=inject(Router);
  constructor(private categoryService: CategoryService) { }
  ngOnInit(): void {
    const id:number=Number(this.route.snapshot.paramMap.get('id'));
    this.categoryService.getBookEditById(id).subscribe(
      (updateBook: UpdateBook) => {
        this.updateBook = updateBook;
        console.log(this.updateBook);
      },
      error => {
        console.error('Error loading movies:', error);      
      }
    );
  }
  onFileChange(event:any){
    if(event.target.files && event.target.files.length>0){ 
      const file = event.target.files[0]; 
      this.updateBook.bookImage = file;
    }
  
};
onFormSubmit(){
  debugger
  const formData = new FormData();
  formData.set("bookId", this.updateBook.bookId.toString());
  formData.set("bookName",this.updateBook.bookName);
  formData.set("writer",this.updateBook.writer);
  formData.set("genre",this.updateBook.genre);
  const formattedDate =formData.set("releasedDate",new Date(this.updateBook.releaseDate).toISOString());
  console.log("Release Date:", this.updateBook.releaseDate);

  if(this.updateBook.bookImage){

    formData.append('bookImage',this.updateBook.bookImage,this.updateBook.bookImage.name);
  }
  formData.forEach(val => console.log(val));
  this.uploadFormData(formData);
}


uploadFormData(formData:FormData){
  debugger
  this.categoryService.updateBook(formData)
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
