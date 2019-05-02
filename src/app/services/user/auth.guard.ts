import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth'; // instead of firebase
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators'
import { UserService } from 'src/app/user.service'

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  /** @ignore */
  constructor(private auth: AngularFireAuth, private router: Router, public user: UserService) {}

  canLoad(): Observable<boolean> {
    return this.performCheck();
  }

  canActivate(): Observable<boolean> {
    return this.performCheck();
  }

  canActivateChild(): Observable<boolean> {
    return this.performCheck();
  }

  private performCheck(): Observable<boolean> {
    return this.auth.user.pipe(map((authUser) => {
      if (authUser) {
        console.log(authUser);
        // user is logged in
        const username = authUser.email;
        this.user.setUser({
          username,
          uid: authUser.uid
        });
        return true;
      }
      // user is not logged in
      this.router.navigate(['/signin']);
      return false;
    }), 
    take(1));
  }
}