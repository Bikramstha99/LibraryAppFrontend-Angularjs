import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Auth/login/login.component';
import {FlexLayoutModule} from '@angular/flex-Layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CustomInterceptorService } from './Auth/login/auth-services/custom-interceptor.service';
import { HomepageComponent } from './homepage/homepage.component';
import { ToastrModule } from 'ngx-toastr';
import { ListUserComponent } from './features/User/list-user/list-user.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { SearchUserFilterPipe } from './search-user-filter.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AddBookComponent } from './features/Category/add-book/add-book.component';
import { UpdateBookComponent } from './features/Category/update-book/update-book.component';
import { ListBookComponent } from './features/Category/list-book/list-book.component';
import { GetBookByIdComponent } from './features/Category/get-book-by-id/get-book-by-id.component';
import { DeleteBookComponent } from './features/Category/delete-book/delete-book.component';

// import { GetUserComponent } from './features/User/get-user/get-user.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomepageComponent,
    ListUserComponent,
    SearchFilterPipe,
    SearchUserFilterPipe,
    AddBookComponent,
    UpdateBookComponent,
    ListBookComponent,
    GetBookByIdComponent,
    DeleteBookComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule ,
    MatCardModule ,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatPaginatorModule,
   
    

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass:CustomInterceptorService,
  multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
