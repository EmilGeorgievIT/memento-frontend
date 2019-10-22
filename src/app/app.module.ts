import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/modules/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainModule } from './main/modules/main.module';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { MaterialModule } from './shared/modules/material.module';
import { RecaptchaModule, RecaptchaFormsModule, RECAPTCHA_SETTINGS } from 'ng-recaptcha';
import { AuthModule } from './auth/modules/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RecaptchaModule,
    AuthModule,
    RecaptchaFormsModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(rootRouterConfig),
    MainModule
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
          siteKey: '6LfpR70UAAAAAN5COKrjW6xeDSJDysDMUzx4HP9n'
    }
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
