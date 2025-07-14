import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import FormsModule for form handling
import { Router } from '@angular/router'; // Import Router for navigation
import { AuthService } from '../../services/auth.service'; // Import AuthService for authentication logic


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  successMessage = '';
  loginError = '';


  constructor(private router:Router, private auth:AuthService) { }

  login(form: NgForm){
    console.log("Login button clicked",this.email, this.password);
    if (form.valid) {
      let res = this.auth.login(this.email, this.password);
      if (res === 200) {
        this.router.navigate(['/home']);
      }
      if (res === 403) {
        this.loginError = 'Invalid email or password';
      }
      // Reset the form after submission
      form.reset();
    }
  }

}
