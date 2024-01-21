import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListUserComponent } from './features/User/list-user/list-user.component';
import { GetUserByIdComponent } from './features/User/get-user-by-id/get-user-by-id.component';
import { DeleteUsesrComponent } from './features/User/delete-usesr/delete-usesr.component';
import { authGuard } from './auth-guard/auth.constants';
import { AddBookComponent } from './features/Category/add-book/add-book.component';
import { ListBookComponent } from './features/Category/list-book/list-book.component';
import { GetBookByIdComponent } from './features/Category/get-book-by-id/get-book-by-id.component';
import { DeleteBookComponent } from './features/Category/delete-book/delete-book.component';
import { UpdateBookComponent } from './features/Category/update-book/update-book.component';
// import { authGuard } from './auth/auth.constants';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home/dashboard',canActivate: [authGuard],component:HomepageComponent},
  {path:'home/user',canActivate: [authGuard],component:ListUserComponent},
  {path:'home/user/getuser/:id',canActivate: [authGuard],component:GetUserByIdComponent}, 
  {path:'home/user/deleteuser/:id',canActivate: [authGuard],component:DeleteUsesrComponent}, 
  {path:'admin/categories', canActivate: [authGuard],component:ListBookComponent},
  {path:'admin/categories/add', canActivate: [authGuard],component:AddBookComponent },
  {path:'admin/categories/getbook/:id',canActivate: [authGuard],component:GetBookByIdComponent  }, 
  {path:'admin/categories/updatebook/:id',canActivate: [authGuard],component:UpdateBookComponent  }, 
  {path:'admin/categories/deletebook/:id',canActivate: [authGuard],component:DeleteBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
