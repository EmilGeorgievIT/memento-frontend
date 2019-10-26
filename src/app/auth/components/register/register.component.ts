import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/shared/helpers/match-error-state';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  hide = true;
  hide2 = true;
  isSubmitted = false;
  selectedValue = 'Admin';

  listRoles = [
    "Admin",
    "Agency",
    "Buyer"
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerService: RegisterService
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['',  Validators.required],
      email: ['', Validators.compose([
        Validators.email,
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(8),
        Validators.required
      ])],
      roleName: ['ADMIN',  Validators.required],
      confirmPassword: ['', Validators.compose([
        Validators.minLength(8),
        Validators.required
      ])],
      recaptchaReactive: [null, Validators.required]
    }, {validator: this.checkPasswords});
  }
  checkPasswords(group: FormGroup) {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : {notSame: true};
  } 

  onSubmit() {
    if(this.registerForm.invalid) {
      return;
    } else {
      
      this.registerService.createUser(this.registerForm.value).subscribe(data => {
        this.isSubmitted = true;

        setTimeout(() => {
          this.router.navigateByUrl('/home');
        }, 5000);
      }, error => {
        console.log(error);
      })
    }
  }

  ngOnInit() {
  }

}
