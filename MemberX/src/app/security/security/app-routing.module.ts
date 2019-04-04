import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { CommissionsComponent } from './commissions/commissions.component';
import { CustomerComponent } from './customer/customer.component';
import { AuthGuard } from './services/auth-guard.service';
import { MSMTestComponent } from './test/msm-test.component';
import { DOMTestComponent } from './test/dom-test.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'test', 
    component: TestComponent,
    canActivate: [AuthGuard]
  },
  { path: 'commissions', component: CommissionsComponent, canActivate: [AuthGuard]},
  { path: 'customers', component: CustomerComponent, canActivate: [AuthGuard]},
  { path: 'customer/:customerID', component: CustomerComponent, canActivate: [AuthGuard]},
  { 
    path: 'msm', 
    component: MSMTestComponent,
    canActivate: [AuthGuard],
    data: { claimType: ['Can Add MSM Notes Action Note','Can Add MSM Supervisor Action Note'] }
  },
  { 
    path: 'dom', 
    component: DOMTestComponent,
    canActivate: [AuthGuard],
    data: { claimType: ['Can Add DOM Action Note','Can Add DOM Call Back Action Note'] }
  },
  { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
