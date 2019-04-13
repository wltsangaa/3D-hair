import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: 'signin.page.html',
  styleUrls: ['signin.page.scss'],
})
export class SigninPage {
  user_input = {
    username: "",
    password: ""
  };

  constructor(private router: Router) {
  }

  goToSignup() {
    this.router.navigate(["/signup"]);
  }

  login() {
    console.log(this.user_input);
  	this.router.navigate(["/home"]);
  }
  
  passwordRecovery() {
  }
}