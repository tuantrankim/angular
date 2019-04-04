import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { CommissionsComponent } from './commissions/commissions.component';
import { CustomerComponent } from './customer/customer.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'test', 
    component: TestComponent,
    canActivate: [AuthGuard],
    data: { claimType: 'canAccessProducts' }

  },
  { path: 'commissions', component: CommissionsComponent, canActivate: [AuthGuard]},
  { path: 'customers', component: CustomerComponent, canActivate: [AuthGuard]},
  { path: 'customer/:customerID', component: CustomerComponent, canActivate: [AuthGuard]},
  { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
