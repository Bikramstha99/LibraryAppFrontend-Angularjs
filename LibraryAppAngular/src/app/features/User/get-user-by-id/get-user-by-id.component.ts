import { Component, inject } from '@angular/core';
import { GetUser } from '../user-models/get-user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user-services/user.service';

@Component({
  selector: 'app-get-user-by-id',
  templateUrl: './get-user-by-id.component.html',
  styleUrls: ['./get-user-by-id.component.scss']
})
export class GetUserByIdComponent {
  user!: GetUser;
  id!: string;
  private readonly route = inject(ActivatedRoute);
  private readonly router=inject(Router);
 

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    const userId:number=Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserById(userId).subscribe(
      (user: GetUser) => {
        this.user = user;
        console.log(this.user);
      },
      error => {
        console.error('Error loading movies:', error);      
      }
    );
      
}
}
