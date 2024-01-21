import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  imageUrl:string='/assets/Bikram.png'
  hasToken(): boolean {
    // Check if token exists in localStorage
    const token = localStorage.getItem('token');
    return token !== null && token !== undefined;
  }

}
