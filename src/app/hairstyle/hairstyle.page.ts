import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hairstyle',
  templateUrl: 'hairstyle.page.html',
  styleUrls: ['hairstyle.page.scss'],
})
export class HairstylePage {
	hairstyles: object[];
  selected_hairstyle_index: number;

  constructor(private router: Router) {
  	this.hairstyles = [
  		{
  			photo: "/assets/imgs/hairstyle_1.jpg"
  		},
  		{
  			photo: "/assets/imgs/hairstyle_2.jpg"
  		},
  		{
  			photo: "/assets/imgs/hairstyle_3.jpg"
  		},
  		{
  			photo: "/assets/imgs/hairstyle_4.jpg"
  		},
  		{
  			photo: "/assets/imgs/hairstyle_5.jpg"
  		},
  		{
  			photo: "/assets/imgs/hairstyle_6.jpg"
  		},
  		{
  			photo: "/assets/imgs/hairstyle_7.jpg"
  		},
  		{
  			photo: "/assets/imgs/hairstyle_8.jpg"
  		}
  	];
    this.selected_hairstyle_index = -1;
  }
  goToSignup() {
    this.router.navigate(["/signup"]);
  }
  hairstyleSelect(hairstyle_index) {
    this.selected_hairstyle_index = hairstyle_index;
    console.log(this.selected_hairstyle_index);
  }
}