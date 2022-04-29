import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ICurrentUser } from 'src/app/core/interfaces/currentUser';
import { IOffer } from 'src/app/core/interfaces/offer';
import { IUser } from 'src/app/core/interfaces/user';
import { AuthService } from 'src/app/core/service/auth.service';
import { OfferService } from 'src/app/core/service/offer.service';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  currentUser$: Observable<IUser | undefined> = this.authService.currentUser$;
  username: string | undefined = undefined;
  user: IUser | undefined = undefined;
  myOffers!: IOffer[];

  constructor(private authService: AuthService, private userService: UserService, private offerService: OfferService) { }

  ngOnInit(): void {

    this.currentUser$.subscribe(currentUser => {
      this.username = currentUser?.username;
      this.userService.getUserByUsername$(this.username!)
      .subscribe(user => {
        this.user = user
        this.offerService.getUserOffers$(this.user!.id)
        .subscribe(offers => this.myOffers = offers);
      });
    })

    

    
  }

}
