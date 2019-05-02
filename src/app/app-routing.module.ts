import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/user/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'signin', loadChildren: './signin/signin.module#SigninPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule', canActivate: [AuthGuard] },
  { path: 'bill', loadChildren: './bill/bill.module#BillPageModule', canActivate: [AuthGuard] },
  { path: 'booking', loadChildren: './booking/booking.module#BookingPageModule', canActivate: [AuthGuard] },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule', canActivate: [AuthGuard] },
  { path: 'product', loadChildren: './product/product.module#ProductPageModule', canActivate: [AuthGuard] },
  { path: 'customer_care', loadChildren: './customer_care/customer_care.module#CustomerCarePageModule', canActivate: [AuthGuard] },
  { path: 'hairstyle', loadChildren: './hairstyle/hairstyle.module#HairstylePageModule', canActivate: [AuthGuard] }, 
  { path: 'sub_cancel', loadChildren: './sub_cancel/sub_cancel.module#SubCancelPageModule', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
