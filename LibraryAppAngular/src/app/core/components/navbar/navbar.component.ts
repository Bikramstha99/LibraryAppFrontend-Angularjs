import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Auth/login/auth-services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  hasToken(): boolean {
    // Check if token exists in localStorage
    const token = localStorage.getItem('token');
    return token !== null && token !== undefined;
  }

  adminName: string = "Admin";

  constructor(private router: Router,public authService: AuthServiceService) {}

  logOut(): void {
    debugger
    localStorage.removeItem('token');
    this.router.navigate(['']); // Assuming 'login' is the route path for your login page
  }

}
