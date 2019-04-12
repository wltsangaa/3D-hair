import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: 'news.page.html',
  styleUrls: ['news.page.scss'],
})
export class NewsPage {

  news_feeds: object [];

  constructor(private router: Router) {
  	this.news_feeds = [
		{
			author: "Claudiaaaa",
			time: "15 mins ago",
			title: "Hair loss is affecting your career",
			category: "BUSINESS",
			photo: "/assets/imgs/news_1.jpg"
		},
		{
			author: "Yuri",
			time: "15 mins ago",
			title: "\"Best Hair Treatment\" U Life Magazine",
			category: "LEISURE",
			photo: "/assets/imgs/news_2.jpg"
		},
		{
			author: "Benjamin",
			time: "15 mins ago",
			title: "Build a local business",
			category: "BUSINESS",
			photo: "/assets/imgs/news_3.jpg"
		},
		{
			author: "William Wong",
			time: "15 mins ago",
			title: "Anti hair loss shampoo's claims proved to be fake",
			category: "LIFESTYLE",
			photo: "/assets/imgs/news_4.jpg"
		},
		{
			author: "Alan",
			time: "15 mins ago",
			title: "The secret to healthy hair",
			category: "LIFESTYLE",
			photo: "/assets/imgs/news_5.jpg"
		}
  	];
  }
  goToSignup() {
    this.router.navigate(["/signup"]);
  }
}