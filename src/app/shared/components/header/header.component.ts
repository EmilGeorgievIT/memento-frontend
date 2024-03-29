import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  isMobileMenuActive = false;

  constructor(
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.email,
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])],
      recaptchaReactive: [null, Validators.required]
    }); 
   }
   
  triggerMenu() {
    this.isMobileMenuActive = !this.isMobileMenuActive;
  }
  
  ngOnInit() {
  }

}
