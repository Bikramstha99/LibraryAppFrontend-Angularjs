import { Component, inject } from '@angular/core';
import { GetBook } from '../models/get-book';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent {
  book!: GetBook;
  bookId!: string;
  private readonly route = inject(ActivatedRoute);
  private readonly router=inject(Router);
  constructor(private categoryService: CategoryService) { }
  ngOnInit(): void {
    const bookId: number = Number(this.route.snapshot.paramMap.get('id'));
    this.categoryService.deleteBook(bookId).subscribe({
        next: (response) => {
            console.log('Book deleted successfully');
            this.router.navigate(['admin/categories']);
        },
        error: (error) => {
            console.error('Error deleting book: ', error);
        }
    });
  
  }

}
