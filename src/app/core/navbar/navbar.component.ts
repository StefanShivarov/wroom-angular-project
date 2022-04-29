import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ICurrentUser } from '../interfaces/currentUser';
import { IUser } from '../interfaces/user';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser$: Observable<IUser | undefined> = this.authService.currentUser$;
  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.setCurrentUser();
    console.log(this.currentUser$);
  }

  signOutHandler(){
    this.authService.handleSignOut();
    this.router.navigate(['/']);
  }
}
