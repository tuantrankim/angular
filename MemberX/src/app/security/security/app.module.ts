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
import { HomeComponent } from './home/home.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { TestComponent } from './test/test.component';
import { HttpInterceptorModule } from './security/http-interceptor.module';
import { HasClaimDirective } from './security/has-claim.directive';
import { MSMTestComponent } from './test/msm-test.component';
import { DOMTestComponent } from './test/dom-test.component';
import { SecurityService } from './security/security.service';
import { AuthGuard } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CommissionsComponent,
    CustomerComponent,
    BsNavbarComponent,
    HomeComponent,
    CustomerInfoComponent,
    TestComponent,
    MSMTestComponent,
    DOMTestComponent,
    HasClaimDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatComponentsModule,
    NgbModule,
    HttpInterceptorModule
  ],
  providers: [
    MemberXSystemService,
    SecurityService,
    AuthGuard,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
