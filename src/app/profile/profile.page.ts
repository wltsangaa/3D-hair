import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage {

	user_info = {
		name: "", 
		title: "", 
		username: "",
		email: "",
		notification_toggle: false
	};

	subsections: string[];
	selected_subsection = "";

	constructor(private router: Router) {
		this.user_info = {
			name: "Benjamin Trolio", 
			title: "UI/UX Designer", 
			username: "benjamin.trolio",
			email: "basdfljakhsfd",
			notification_toggle: true
		};
		this.subsections = ["about", "settings", "shots"];
		this.selected_subsection = "settings";
	}

	printSubsec() {
		console.log(this.selected_subsection);
	}
	
	editUsername() {

	}
	editEmail() {

	}
}