import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router) {}

  logout(){
    // Logic to handle logout
    console.log('User logged out');
    // You can also redirect to the login page or clear user session here
    this.router.navigate(['/login']);
  }
}
