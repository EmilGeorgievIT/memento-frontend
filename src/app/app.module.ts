import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponent } from './unauthenticated/login/login.component';
import { RegisterComponent } from './unauthenticated/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/modules/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainModule } from './main/modules/main.module';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
>>>>>>> d06f9ab219eb0f3bdf68b105dc91d8f84bb77f63

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule,
=======
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(rootRouterConfig),
    MainModule,
>>>>>>> d06f9ab219eb0f3bdf68b105dc91d8f84bb77f63
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
