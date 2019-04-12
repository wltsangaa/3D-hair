import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill',
  templateUrl: 'bill.page.html',
  styleUrls: ['bill.page.scss'],
})
export class BillPage {
	transactions: object[];
	bill_info: object;

	constructor(private router: Router) {
		this.transactions = [
			{
				title: "Hair Wig Subscription",
				description: "Hairstyle #1b - 14th Month",
				price: 999
			},
			{
				title: "Hair Wig Subscription",
				description: "Hairstyle #1b - 13th Month",
				price: 999
			},
			{
				title: "Hair Treatment",
				description: "Supreme Hair Root Energizer",
				price: 400
			},
			{
				title: "Hair Wig Subscription",
				description: "Hairstyle #1b - 12th Month",
				price: 999
			},
			{
				title: "Hair Wig Subscription",
				description: "Hairstyle #1b - 11th Month",
				price: 999
			}
		];
		this.bill_info = {
			num_past_booking: 14,
			num_bookings_left: 10,
			subscription_end_date: "2/12/2010"
		};
	}
	goToSignup() {
	this.router.navigate(["/signup"]);
	}
}