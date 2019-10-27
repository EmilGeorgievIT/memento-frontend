import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/shared/helpers/match-error-state';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  hide = true;
  hide2 = true;
  selectedValue = 'Agent';

  listRoles = [
    "Agent",
    "Agency",
    "Buyer"
  ];

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.email,
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(8),
        Validators.required
      ])],
      recaptchaReactive: [null, Validators.required]
    });
  } 

  onSubmit() {
    const { email, password } = this.loginForm.value;

    if(this.loginForm.invalid) {
      return;
    } else {
       this.loginService.login(email, password).subscribe(data => {
         this.router.navigateByUrl('/home');
       }, error => {
         console.log(error);
       })
    }
  }

  ngOnInit() {
  }

}
