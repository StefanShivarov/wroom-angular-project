import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MyProfileComponent } from './my-profile/my-profile.component';



@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    MyProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
