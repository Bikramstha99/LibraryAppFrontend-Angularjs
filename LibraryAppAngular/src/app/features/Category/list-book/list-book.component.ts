import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetBook } from '../models/get-book';
import { CategoryService } from '../services/category.service';
import { AuthServiceService } from 'src/app/Auth/login/auth-services/auth-service.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent {
  searchText!:string;
  private readonly router=inject(Router);
  private readonly route=inject(ActivatedRoute);
  books:GetBook[]=[];
  pagedBooks: any[] = []; // Movies for the current page
  totalBooks: number = 0; // Total number of movies
  pageSize: number = 4; // Number of movies per page
  currentPage: number = 1; // Current page number

  // hasToken(): boolean {
  //   // Check if token exists in localStorage
  //   const token = localStorage.getItem('token');
  //   return token !== null && token !== undefined;
  // }
  constructor(private categoryService:CategoryService ,public authService: AuthServiceService ){}
 
  ngOnInit(): void {
    this.categoryService.getBook().subscribe(
      (books: GetBook[]) => {
        this.books = books;
        this.totalBooks = this.books.length;
        this.setPage(1); 
       
      },
       
      error => {
        console.error('Error loading movies:', error);
      }
    );
    }

  onPageChange(event: any): void {
    this.setPage(event.pageIndex + 1);
  }

  setPage(page: number): void {
    this.currentPage = page;
    const startIndex = (page - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.totalBooks);
    this.pagedBooks = this.books.slice(startIndex, endIndex);
  }

    goToItemDetails(books: GetBook): void {
    this.router.navigate(['getbook', books.bookId], { state: { books }, relativeTo: this.route }).then();
  }

  goToItemEdit(books: GetBook): void {
    this.router.navigate(['updatebook', books.bookId], { state: { books }, relativeTo: this.route }).then();
  }

  goToItemDelete(books: GetBook): void {
    this.router.navigate(['deletebook', books.bookId], { state: { books }, relativeTo: this.route }).then();
  }
}
