import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInUserDto } from 'src/app/core/interfaces/SignInUserDto';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  errorMessage: string = '';
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  signInFormGroup: FormGroup = this.formBuilder.group({
    'username': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'password': new FormControl(null, [Validators.required, Validators.minLength(5)])
  })

  shouldShowErrorForControl(controlName: string, sourceGroup: FormGroup = this.signInFormGroup){
    return sourceGroup.controls[controlName].touched && sourceGroup.controls[controlName].invalid;
  }

  ngOnInit(): void {
  }

  handleSignIn(): void{
    const { username, password } = this.signInFormGroup.value;
    this.errorMessage = '';
    this.authService.signIn$(this.signInFormGroup.value).subscribe({
      next: () => {
        console.log('User successfully logged in!');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = err.error.message;
      }
    })
    const body: SignInUserDto = {
      username: username,
      password: password
    }

    console.log(body);
    this.signInFormGroup.reset();
  }

}
