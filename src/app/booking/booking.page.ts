import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-booking',
  templateUrl: 'booking.page.html',
  styleUrls: ['booking.page.scss'],
})
export class BookingPage {
  yearmonths: number[];
  days: number[];
  durations: number[];

  yearmonth_day_dict: object;

  selected_yearmonth: number;
  selected_day: number;
  selected_duration: number;

  product_statuses: string[];

  constructor(private router: Router) {
    this.yearmonth_day_dict = this.get_yearmonth_day_dict(12, 5);
    this.yearmonths = Object.keys(this.yearmonth_day_dict).map(Number);
    this.days = [];
    this.durations = [1, 2, 3];
    this.product_statuses = ["Using since 1/23/2019", "Fixed Contract Ended"];

    this.select_yearmonth(this.yearmonths[0]);
    this.select_day(this.days[0]);
    this.select_duration(this.durations[0]);
  }

  // Helper functions
  get_range(start: number, end: number) {
    var arr = [];
    for (var i = start; i < end; ++i)
      arr.push(i);
    return arr;
  }
  get_yearmonth_names(yearmonth: number) {
    var month_names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                       "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var month_name = month_names[yearmonth%100];
    if (((new Date()).getFullYear() != Math.floor(yearmonth/100))) {
      var year_name = Math.floor(yearmonth/100).toString();
      return month_name + " " + year_name;
    } else
      return month_name;
  }

  // month_day_dict construction
  get_day_range(yearmonth: number, start: number) {
    switch (yearmonth%100+1) {
      case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        return this.get_range(start, 31 + 1);
      case 4: case 6: case 9: case 11:
        return this.get_range(start, 30 + 1);
      case 2:
        if (Math.floor(yearmonth/100) % 4 == 0)
          return this.get_range(start, 29 + 1);
        else
          return this.get_range(start, 28 + 1);
    }
  }
  get_coming_n_yearmonths(n: number, curr_date: Date) {
    var curr_month = curr_date.getMonth(); // 0 start
    var curr_year = curr_date.getFullYear();

    var yearmonths = [];
    for (var i = 0; i < n; ++i) {
      var new_year = Math.floor((curr_month + i) / 12) + curr_year;
      var new_month = (curr_month + i) % 12;
      yearmonths.push(new_year * 100 + new_month);
    }

    return yearmonths;
  }
  get_yearmonth_day_dict(n: number, offset: number) {
    var earliest = new Date();
    earliest.setDate(earliest.getDate() + offset);
    var earliest_yearmonth = earliest.getFullYear() * 100 + earliest.getMonth();
    var earliest_day = earliest.getDate();

    var yearmonth_day_dict = {};
    var yearmonths = this.get_coming_n_yearmonths(n, earliest);
    yearmonths.forEach((yearmonth)=>{
      var start_day = (yearmonth == earliest_yearmonth) ? earliest_day : 1;
      var days = this.get_day_range(yearmonth, start_day);
      yearmonth_day_dict[yearmonth] = days;
    });

    return yearmonth_day_dict;
  }

  select_yearmonth(yearmonth) {
    this.selected_yearmonth = yearmonth;
    this.days = this.yearmonth_day_dict[yearmonth.toString()];
    this.selected_day = null;
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
    console.log(this.selected_yearmonth);
    console.log(this.selected_day);
    console.log(this.selected_duration);
  }
}