import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', loadChildren: './signin/signin.module#SigninPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'bill', loadChildren: './bill/bill.module#BillPageModule' },
  { path: 'booking', loadChildren: './booking/booking.module#BookingPageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'product', loadChildren: './product/product.module#ProductPageModule' },
  { path: 'customer_care', loadChildren: './customer_care/customer_care.module#CustomerCarePageModule' },
  { path: 'hairstyle', loadChildren: './hairstyle/hairstyle.module#HairstylePageModule' }, 
  { path: 'sub_cancel', loadChildren: './sub_cancel/sub_cancel.module#SubCancelPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
