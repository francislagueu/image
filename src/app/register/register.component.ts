import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string;
  password: string;
  errorMsg: string;
  constructor(private authService: AuthenticationService, private router: Router) { }

  register() {
    this.authService.register({email: this.email, password: this.password})
      .then((resolve) => this.router.navigate(['gallery']))
      .catch((error) => this.errorMsg = error.message);
  }

}
