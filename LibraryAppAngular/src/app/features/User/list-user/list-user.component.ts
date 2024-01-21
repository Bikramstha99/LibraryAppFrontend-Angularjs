import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetUser } from '../user-models/get-user';
import { UserService } from '../user-services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  searchText!:string;
  private readonly router=inject(Router);
  private readonly route=inject(ActivatedRoute);
  users:GetUser[]=[];

  constructor(private userService:UserService){}
  ngOnInit(): void {
    debugger
    this.userService.getUser().subscribe(
      (users: GetUser[]) => {
        this.users = users;
        console.log(this.users);
      },
      error => {
        console.error('Error loading movies:', error);      
      }
    );
  }
  goToItemDetails(user: GetUser):void{
    this.router.navigate(['getuser',user.userId],{state:{user},relativeTo: this.route}).then();
  }
  goToItemDelete(user: GetUser):void{
    this.router.navigate(['deleteuser',user.userId],{state:{user},relativeTo: this.route}).then();
  }
}
