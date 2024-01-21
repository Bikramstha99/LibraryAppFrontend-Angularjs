import { Component, inject } from '@angular/core';
import { GetUser } from '../user-models/get-user';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../Category/services/category.service';
import { UserService } from '../user-services/user.service';

@Component({
  selector: 'app-delete-usesr',
  templateUrl: './delete-usesr.component.html',
  styleUrls: ['./delete-usesr.component.scss']
})
export class DeleteUsesrComponent {
  user!: GetUser;
  id!: string;
  private readonly route = inject(ActivatedRoute);
  private readonly router=inject(Router);
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    const userId: number = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.deleteUser(userId).subscribe({
        next: (response) => {
            console.log('Movie deleted successfully');
            this.router.navigate(['home/user']);
        },
        error: (error) => {
            console.error('Error deleting movie: ', error);
        }
    });
  
  }

}
