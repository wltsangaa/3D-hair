import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	user_info: object;

  constructor(private router: Router) {
  	this.user_info = {
  		username: "Benjamin Trolio",
  		avatar_img: "/assets/imgs/avatar.png", 
  		charge: {
  			amount: 0, 
  			due_date: "22/02/2019"
  		},
  		product: {
  			name: "Hairstyle #1b", 
  			usage: 0.67
  		}
  	};
  }
  goToPage(page) {
  	this.router.navigate(["/" + page]);
  }
}