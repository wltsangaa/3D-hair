import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer_care',
  templateUrl: 'customer_care.page.html',
  styleUrls: ['customer_care.page.scss'],
})
export class CustomerCarePage {
  constructor(private router: Router) {
  }
  goToSignup() {
    this.router.navigate(["/signup"]);
  }
}