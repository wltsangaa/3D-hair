import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer_care',
  templateUrl: 'customer_care.page.html',
  styleUrls: ['customer_care.page.scss'],
})
export class CustomerCarePage {
	store_infos: object[];

	constructor(private router: Router) {
		this.store_infos = [
			{
				store: "Central Store",
				location: "St George's Building Level 12 2 Ice House Street Central"
			},
			{
				store: "Causeway Bay Store",
				location: "23rd Floor, Hysan Place. 500 Hennessy Road, Causeway Bay"
			},
			{
				store: "Mong Kok Store",
				location: "Shop A, G/F., HSH Mongkok Plaza, 794-802 Nathan Road, Mong Kok"
			},
			{
				store: "Tsim Sha Tsui Store",
				location: "1/F, Hermes House, 10 Middle Road, Tsim Sha Tsui"
			},
			{
				store: "Kowloon Tong Store",
				location: "39 Inverness Road, Kowloon Tong"
			}
		];
	}
	goToSignup() {
	this.router.navigate(["/signup"]);
	}
	viewStore(store_index) {
		console.log(store_index);
	}
}