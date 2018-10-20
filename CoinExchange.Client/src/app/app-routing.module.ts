import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'buycoin', loadChildren: './buycoin/buycoin.module#BuycoinPageModule' },
  { path: 'salecoin', loadChildren: './salecoin/salecoin.module#SalecoinPageModule' },
  { path: 'proflie', loadChildren: './proflie/proflie.module#ProfliePageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
