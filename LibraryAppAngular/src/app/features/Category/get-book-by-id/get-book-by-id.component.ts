import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetBook } from '../models/get-book';
import { GetComment } from '../models/get-comment';
import { AddComment } from '../models/add-comment';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-get-book-by-id',
  templateUrl: './get-book-by-id.component.html',
  styleUrls: ['./get-book-by-id.component.scss']
})
export class GetBookByIdComponent {
  book!: GetBook;
  bookId!: string;
  comments:GetComment[]=[];
  comment:AddComment={
    commentDesc:'',
    timeStamp:new Date(),
  };
  private readonly route = inject(ActivatedRoute);
  private readonly router=inject(Router);
 

  constructor(private categoryService: CategoryService) { }
  ngOnInit(): void {
    const bookId:number=Number(this.route.snapshot.paramMap.get('id'));
    this.categoryService.getBookById(bookId).subscribe(
      (book: GetBook) => {
        this.book = book;
        console.log(this.book);
      },
      error => {
        console.error('Error loading books:', error);      
      }
    );

    //getting MovieComment
    const id:number=Number(this.route.snapshot.paramMap.get('id'));
    this.categoryService.getCommentByBookId(id).subscribe(
      (comments: GetComment[]) => {
        this.comments = comments;
        console.log(this.comments);
      },
      error => {
        console.error('Error loading book:', error);      
      }
    );  
  }
  addComment(){
      const bookId:number=Number(this.route.snapshot.paramMap.get('id'));
    this.categoryService.addCommentByBookId(bookId,this.comment).subscribe({
      next: (response) => {
        console.log("Comment added successfully!", response);

        this.comment = {
          commentDesc: '', // Set commentDesc to an empty string or default value
          timeStamp:new Date()
        };

        this.categoryService.getCommentByBookId(bookId).subscribe(
          (comments: GetComment[]) => {
            this.comments = comments;
            console.log("Updated comments:", this.comments);
            
            // Once comments are updated, navigate to the route
            this.router.navigate(['.', { relativeTo: this.route }]);
          },
          error => {
            console.error('Error loading comments:', error);
            // Handle error loading comments, optionally navigate to an error route
          }
        );
      },
      error: (error) => {
        console.error("Error adding comment:", error);
      }
    });
  }

}
