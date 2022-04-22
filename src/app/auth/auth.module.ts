import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    MyProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class AuthModule { }
