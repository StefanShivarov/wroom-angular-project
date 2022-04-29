import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpUserDto } from 'src/app/core/interfaces/SignUpUserDto';
import { AuthService } from 'src/app/core/service/auth.service';
import { passwordsMatch } from '../util';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  passwordControl = new FormControl(null, [Validators.required, Validators.minLength(5)]);

  signUpFormGroup: FormGroup = this.formBuilder.group({
    'fullName': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'username': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'passwords': new FormGroup({
      'password': this.passwordControl,
      'repeatPassword': new FormControl(null, [Validators.required, passwordsMatch(this.passwordControl)])
    })
  })

  get passwordsGroup(): FormGroup {
    return this.signUpFormGroup.controls['passwords'] as FormGroup;
  }

  ngOnInit(): void {
  }

  shouldShowErrorForControl(controlName: string, sourceGroup: FormGroup = this.signUpFormGroup){
    return sourceGroup.controls[controlName].touched && sourceGroup.controls[controlName].invalid;
  }

  handleSignUp(): void{
    const { fullName, email, username, passwords } = this.signUpFormGroup.value;

    const body: SignUpUserDto = {
      fullName: fullName,
      email: email,
      username: username,
      password: passwords.password
    }

    console.log(body);
    // this.authService.signUpUser(body);
    this.signUpFormGroup.reset();
  }
}
