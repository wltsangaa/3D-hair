import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { AngularFirestore } from "@angular/fire/firestore";
import { firestore } from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	user_info: object;

  constructor(private router: Router, public afstore: AngularFirestore, public user: UserService) {
    this.afstore.doc(`users/${this.user.getUID()}`).ref.get().then((doc)=>{
      const docData = doc.data();
      console.log(docData);
      this.user_info = {
        username: docData.name,
        avatar_img: "/assets/imgs/avatar.png", 
        charge: {
          amount: docData.charge.amount, 
          due_date: docData.charge.due_date
        },
        product: {
          name: docData.product.name, 
          usage: docData.product.usage
        }
      };
    });
  }
  goToPage(page) {
  	this.router.navigate(["/" + page]);
  }
}