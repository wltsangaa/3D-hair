import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill',
  templateUrl: 'bill.page.html',
  styleUrls: ['bill.page.scss'],
})
export class BillPage {
  constructor(private router: Router) {
  }
  goToSignup() {
    this.router.navigate(["/signup"]);
  }
}