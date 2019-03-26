import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { MatComponentsModule } from './common/mat-components.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { CommissionsComponent } from './commissions/commissions.component';
import { AppErrorHandler } from './common/app-error-handler';
import { MemberXSystemService } from './services/member-xsystem.service';
import { CustomerComponent } from './customer/customer.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecurityService } from './services/security.service';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CommissionsComponent,
    CustomerComponent,
    BsNavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatComponentsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'login', component: LoginComponent},
      { path: 'commissions', component: CommissionsComponent, canActivate: [AuthGuardService]},
      { path: 'customers', component: CustomerComponent, canActivate: [AuthGuardService]},
      { path: 'customer/:customerID', component: CustomerComponent, canActivate: [AuthGuardService]},
      { path: '**', component: LoginComponent},

    ])

  ],
  providers: [
    MemberXSystemService,
    SecurityService,
    AuthGuardService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
