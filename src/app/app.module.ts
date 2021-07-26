import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { categorycomponent } from 'src/app/category/category.component';
import { NavbarComponent } from './navbar/navbar.component';

import { fortunecomponent } from 'src/app/fortune/fortune.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HomeComponent } from './home/home.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { TemplatedrivenformsComponent } from './templatedrivenforms/templatedrivenforms.component';
import { BackgDirective } from './customdirective/backg.directive';
import { customIfDirective } from './customdirective/customif.directive';
import { customForDirective } from './customdirective/customfor.directive';
import { ChildComponent } from './parent/child/child.component';
import { ParentComponent } from './parent/parent.component';
import { SiblingComponent } from './sibling/sibling.component';
import { BackdbComponent } from './backdb/backdb.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreatestudentComponent } from './backdb/createstudent/createstudent.component';
import { UpdatestudentComponent } from './backdb/updatestudent/updatestudent.component';
import { ErrorInterceptor } from 'src/app/_interceptor/error.interceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import{InterceptorService}from 'src/app/services/interceptor.service';
import { InkoopComponent } from './inkoop/inkoop.component';
import { FormsComponent } from './forms/forms.component';


@NgModule({
  declarations: [
    AppComponent, categorycomponent, NavbarComponent, fortunecomponent, HomeComponent, ReactiveformsComponent, TemplatedrivenformsComponent, BackgDirective, customIfDirective, customForDirective, ChildComponent, ParentComponent, SiblingComponent, BackdbComponent, CreatestudentComponent, UpdatestudentComponent, LoginComponent, DashboardComponent, InkoopComponent, FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, BrowserAnimationsModule, MatProgressBarModule, ReactiveFormsModule, HttpClientModule, MatSnackBarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
