import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub_cancel',
  templateUrl: 'sub_cancel.page.html',
  styleUrls: ['sub_cancel.page.scss'],
})
export class SubCancelPage {
  constructor(private router: Router) {
  }
  goToSignup() {
    this.router.navigate(["/signup"]);
  }
}