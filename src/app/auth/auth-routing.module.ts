import { RouterModule, Routes } from "@angular/router";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

const routes: Routes = [
    {
        path: 'signup',
        component: SignUpComponent
    },
    {
        path: 'signin',
        component: SignInComponent
    },
    {
        path: 'profile',
        component: MyProfileComponent
    }
]

export const AuthRoutingModule = RouterModule.forChild(routes);