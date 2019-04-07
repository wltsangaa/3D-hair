import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';

@Component({
  selector: 'app-signin',
  templateUrl: 'signin.page.html',
  styleUrls: ['signin.page.scss'],
})
export class SigninPage {
  constructor(
    public navCtrl: NavController,
    public authService: AuthService
  ) {
    this.loading = false;
    //this.items = db.list('chatrooms').valueChanges();
  }
  goToSignup() {
    this.navCtrl.push(SignupPage);
  }
}