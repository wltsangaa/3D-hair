import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-booking',
  templateUrl: 'booking.page.html',
  styleUrls: ['booking.page.scss'],
})
export class BookingPage {
	months: string[];
  days: number[];
  durations: number[];

  selected_month: string;
  selected_day: number;
  selected_duration: number;

  product_statuses: string[];

  constructor(private router: Router) {
  	this.months = ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan 18", "Feb 18"];
    this.days = [3, 4, 5, 6, 7, 8, 9, 10, 11];
    this.durations = [1, 2, 3];
    this.product_statuses = ["Using since 1/23/2019", "Fixed Contract Ended"];
  }
  goToSignup() {
    this.router.navigate(["/signup"]);
  }
  select_month(month) {
    this.selected_month = month;
  }
  select_day(day) {
    this.selected_day = day;
  }
  select_duration(duration) {
    this.selected_duration = duration;
  }
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
  book() {
    console.log(this.selected_month);
    console.log(this.selected_day);
    console.log(this.selected_duration);
  }
}