import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { MaterialModule } from './material.module';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { SearchComponent } from '../components/search/search.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
