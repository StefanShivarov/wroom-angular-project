import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICurrentUser } from '../interfaces/currentUser';
import { IUser } from '../interfaces/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUserByUsername$(username: string): Observable<IUser>{
    return this.httpClient.get<IUser>(`${environment.apiUrl}/users/${username}`)
  }
}
