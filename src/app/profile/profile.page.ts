import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { AngularFirestore } from "@angular/fire/firestore";
import { firestore } from 'firebase/app';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage {

	uid = null;

	user_info = {
		name: "", 
		title: "", 
		about: "", 
		username: "",
		email: "",
		notification_toggle: false
	};

	subsections: string[];
	selected_subsection = "";

	editItem = null;

	constructor(private router: Router, public afstore: AngularFirestore, public user: UserService) {
		this.afstore.doc(`users/${this.user.getUID()}`).ref.get().then((doc)=>{
			const docData = doc.data();
			this.user_info = {
				name: docData.name, 
				title: "UI/UX Designer", 
				about: docData.about, 
				username: docData.username,
				email: docData.email,
				notification_toggle: docData.notification_toggle
			};
		});

		this.subsections = ["about", "settings", "shots"];
		this.selected_subsection = "settings";
	}

	editAbout(beginEditing: boolean) {
		if (beginEditing) {
			this.editItem = "About";
		} else {
			this.editItem = null;
			const about = this.user_info.about;
			this.afstore.doc(`users/${this.user.getUID()}`).update({
				about: about
			});
		}
	}
	
	editName(beginEditing: boolean) {
		if (beginEditing) {
			this.editItem = "Name";
		} else {
			this.editItem = null;
			const name = this.user_info.name;
			this.afstore.doc(`users/${this.user.getUID()}`).update({
				name: name
			});
		}
	}
	editUsername(beginEditing: boolean) {
		if (beginEditing) {
			this.editItem = "Username";
		} else {
			this.editItem = null;
			const username = this.user_info.username;
			this.afstore.doc(`users/${this.user.getUID()}`).update({
				username: username
			});
		}
	}
	editEmail(beginEditing: boolean) {
		if (beginEditing) {
			this.editItem = "Email";
		} else {
			this.editItem = null;
			const email = this.user_info.email;
			this.afstore.doc(`users/${this.user.getUID()}`).update({
				email: email
			});
		}
	}

	toggleNotification() {
		const notification_toggle = this.user_info.notification_toggle;
		this.afstore.doc(`users/${this.user.getUID()}`).update({
			notification_toggle: notification_toggle
		});
	}

	upload_photo() {
		console.log("Upload photo");
	}
}