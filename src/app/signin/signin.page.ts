import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { UserService } from '../user.service'

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

  login_error_msg = "";

  constructor(private router: Router, public afAuth: AngularFireAuth, public user: UserService) {
  }

  goToSignup() {
    this.router.navigate(["/signup"]);
  }

  async login() {
    console.log(this.user_input);
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(this.user_input.username + "@3dhair.org", this.user_input.password);

      if (res.user) {
        const username = this.user_input.username;
        this.user.setUser({
          username,
          uid: res.user.uid
        });
        this.router.navigate(["/home"]);
      }

    } catch(error) {
       console.dir(error);
       switch (error.code) {
         case "auth/user-not-found":
           this.login_error_msg = "Username does not exist.";
           break;
         case "auth/wrong-password":
           this.login_error_msg = "Wrong password.";
           break;
       }
    }
  }
  
  passwordRecovery() {
  }
}