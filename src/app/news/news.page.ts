import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: 'news.page.html',
  styleUrls: ['news.page.scss'],
})
export class NewsPage {
  constructor(private router: Router) {
  }
  goToSignup() {
    this.router.navigate(["/signup"]);
  }
}