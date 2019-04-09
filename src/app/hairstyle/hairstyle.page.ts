import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hairstyle',
  templateUrl: 'hairstyle.page.html',
  styleUrls: ['hairstyle.page.scss'],
})
export class HairstylePage {
  constructor(private router: Router) {
  }
  goToSignup() {
    this.router.navigate(["/signup"]);
  }
}