import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, EMPTY, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtResponse } from '../interfaces/jwtResponse';
import { SignInUserDto } from '../interfaces/SignInUserDto';
import { SignUpUserDto } from '../interfaces/SignUpUserDto';
import { IUser } from '../interfaces/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _currentUser = new BehaviorSubject<IUser | undefined>(
      undefined
  );

  currentUser$ = this._currentUser.asObservable();
  isLoggedIn$ = this.currentUser$.pipe(map(user => !!user))

  constructor(private httpClient: HttpClient, private userService: UserService) {
    console.log('AuthService # constructor')
    this.setCurrentUser();
  }

  setCurrentUser(){
    this.userService.getUserByUsername$(localStorage.getItem('currentUser') || '')
      .subscribe(user => {
        console.log(user);
        if(!!user){
          this._currentUser.next(user);
        }
      })
  }

  signUp$(userData: SignUpUserDto): Observable<IUser>{
    return this.httpClient.post<IUser>(`${environment.apiUrl}/auth/signup`, userData, {withCredentials: true})
  }

  signIn$(userData: SignInUserDto): Observable<JwtResponse>{
    return this.httpClient
      .post<JwtResponse>(`${environment.apiUrl}/auth/signin`, userData, {withCredentials: true})
      .pipe(tap(response => this.authenticate(response)), catchError((err) => {
        return EMPTY;
      }));
  }

  authenticate(jwtResponse: JwtResponse){

    this.userService.getUserByUsername$(jwtResponse.username).subscribe(user => {
      const newUser: IUser = {
        ...user,
        jwtAuthToken: jwtResponse.token
      }
      this.handleSignIn(newUser);
      localStorage.setItem('currentUser', newUser.username);
      localStorage.setItem('jwtToken', jwtResponse.token);
      console.log(newUser);
    })
    
  }

  handleSignIn(newUser: IUser){
    console.log(newUser);
    this._currentUser.next(newUser);
  }

  handleSignOut(){
    this._currentUser.next(undefined);
    localStorage.removeItem('currentUser');
    localStorage.removeItem('jwtToken');
  }

}
