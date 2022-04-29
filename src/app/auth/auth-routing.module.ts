import { RouterModule, Routes } from "@angular/router";
import { AlreadyAuthenticatedGuard } from "../core/guards/already-authenticated.guard";
import { AuthGuard } from "../core/guards/auth.guard";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

const routes: Routes = [
    {
        path: 'signup',
        component: SignUpComponent,
        canActivate: [AlreadyAuthenticatedGuard]
    },
    {
        path: 'signin',
        component: SignInComponent,
        canActivate: [AlreadyAuthenticatedGuard]
    },
    {
        path: 'profile',
        component: MyProfileComponent,
        canActivate: [AuthGuard]
    }
]

export const AuthRoutingModule = RouterModule.forRoot(routes);