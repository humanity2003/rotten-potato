import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent {

  constructor(private router:Router) {}

  openLoginPage(){
    console.log("test");
    this.router.navigate(['/login']);
  }

}
