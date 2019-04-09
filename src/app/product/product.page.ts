import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: 'product.page.html',
  styleUrls: ['product.page.scss'],
})
export class ProductPage {
  constructor(private router: Router) {
  }
  goToSignup() {
    this.router.navigate(["/signup"]);
  }
}