import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: 'product.page.html',
  styleUrls: ['product.page.scss'],
})
export class ProductPage {
  months: number[];
  days: number[];
  durations: number[];

  selected_month: string;
  selected_day: number;
  selected_duration: number;

  product_contents: string[];

  constructor(private router: Router) {
  	this.months = this.get_coming_n_months(12);
    this.days = [];
    this.durations = [24];
    this.product_contents = [
      "", "Includes 24 free maintenance session", ""
    ];
  }

  get_range(start: number, end: number) {
    var arr = [];
    for (var i = start; i < end; ++i)
      arr.push(i);
    return arr;
  }
  get_day_range(month: number) {
    switch ((month%100-1)%12+1) {
      case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        return this.get_range(1, 31 + 1);
      case 4: case 6: case 9: case 11:
        return this.get_range(1, 30 + 1);
      case 2:
        if (Math.floor(month/100) % 4 == 0)
          return this.get_range(1, 29 + 1);
        else
          return this.get_range(1, 28 + 1);
    }
  }
  get_coming_n_months(n: number) {
    var today = new Date();
    var curr_month = today.getMonth(); // 0 start
    var curr_year = today.getFullYear();

    var months = [];
    for (var i = 0; i < n; ++i) {
      var new_year = Math.floor((curr_month + i) / 12) + curr_year;
      var new_month = (curr_month + i) % 12;
      months.push(new_year * 100 + new_month + 1);
    }

    return months;
  }
  get_month_names(month) {
    var month_names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                       "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var month_name = month_names[month % 100 - 1];
    if (((new Date()).getFullYear() != Math.floor(month/100))) {
      var year_name = Math.floor(month/100).toString();
      return month_name + " " + year_name;
    } else
      return month_name;
  }

  select_month(month) {
    this.selected_month = month;
    this.days = this.get_day_range(month);
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