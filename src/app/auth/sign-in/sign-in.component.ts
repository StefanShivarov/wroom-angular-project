import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignInUserDto } from 'src/app/core/interfaces/SignInUserDto';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  signInFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [Validators.required, Validators.minLength(5)])
  })

  shouldShowErrorForControl(controlName: string, sourceGroup: FormGroup = this.signInFormGroup){
    return sourceGroup.controls[controlName].touched && sourceGroup.controls[controlName].invalid;
  }

  ngOnInit(): void {
  }

  handleSignIn(): void{
    const { email, password } = this.signInFormGroup.value;

    const body: SignInUserDto = {
      email: email,
      password: password
    }

    console.log(body);
    this.signInFormGroup.reset();
  }

}
