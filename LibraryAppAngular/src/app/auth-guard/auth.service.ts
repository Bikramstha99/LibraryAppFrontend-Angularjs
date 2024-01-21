import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private localStorageKey = 'isLoggedIn';
  private isLoggedIn = false;

  constructor() {
    // Retrieve the authentication state from localStorage on service initialization
    this.isLoggedIn = JSON.parse(localStorage.getItem(this.localStorageKey) || 'false');
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  authenticate(): void {
    this.isLoggedIn = true;

    // Save the authentication state to localStorage
    localStorage.setItem(this.localStorageKey, 'true');
  }

  logout(): void {
    this.isLoggedIn = false;

    // Remove the authentication state from localStorage
    localStorage.removeItem(this.localStorageKey);
  }
}
