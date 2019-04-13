import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill',
  templateUrl: 'bill.page.html',
  styleUrls: ['bill.page.scss'],
})
export class BillPage {
	bill_info: object;
	transactions: object[];

	constructor(private router: Router) {
		this.bill_info = {
			num_past_booking: 14,
			num_bookings_left: 10,
			subscription_end_date: "2/12/2010"
		};
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
	}
	goToSignup() {
	this.router.navigate(["/signup"]);
	}
	selectTransaction(selected_index) {
		console.log(selected_index);
	}
}