import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(uname: string, password: string): number {
    if (uname === 'admin' && password === '1234') {
      return 200;
    } else {
      return 403;
    }
  }

    logout(): void {
      // Logic to clear user session or token
      this.router.navigate(['/login']);
    }
}
