import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { UserService } from '../user.service';
import { AngularFirestore } from "@angular/fire/firestore";
import { firestore } from 'firebase/app';

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.page.html',
  styleUrls: ['signup.page.scss'],
})
export class SignupPage {
	user_input = {
		username: "",
	    email: "",
	    country: "",
	    phone: "", 
    	password: ""
	};

	error_msg = "";

	constructor (private router: Router, public afAuth: AngularFireAuth, public user: UserService, public afstore: AngularFirestore) {
	}

	goToSignin () {
		this.router.navigate(["/signin"]);
	}
	async signup() {
		console.log(this.user_input);

		try {
			const res = await this.afAuth.auth.createUserWithEmailAndPassword(this.user_input.username+"@3dhair.org", this.user_input.password);

			const username = this.user_input.username;
			const email = this.user_input.email;
			const country = this.user_input.country;
			const phone = this.user_input.phone;

			this.afstore.doc(`users/${res.user.uid}`).set({
				name: username, 
				username: username,
				email: email,
				country: country,
				phone: phone,
				notification_toggle: true,
				about: "Hi, I'm " + username + ", using 3D Hair.",
				charge: {
					amount: 0, 
          			due_date: null
				},
				product: {
					name: null,
					usage: 0
				}
			});

			this.user.setUser({
	          username,
	          uid: res.user.uid
	        });

	        this.router.navigate(["/home"]);
		} catch (error) {
			console.dir(error);
			switch (error.code) {
				case "auth/weak-password":
					this.error_msg = "Password too short. Please input more than 6 digits.";
					break;
				case "auth/email-already-in-use":
					this.error_msg = "Username already in use";
					break;
			}
		}
	}
}
