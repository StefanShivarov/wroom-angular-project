import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AddCommentDto } from 'src/app/core/interfaces/addCommentDto';
import { IComment } from 'src/app/core/interfaces/comment';
import { IOffer } from 'src/app/core/interfaces/offer';
import { IUser } from 'src/app/core/interfaces/user';
import { AuthService } from 'src/app/core/service/auth.service';
import { CommentService } from 'src/app/core/service/comment.service';
import { OfferService } from 'src/app/core/service/offer.service';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {

  offer!: IOffer;
  comments!: IComment[];
  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;
  currentUser$: Observable<IUser | undefined> = this.authService.currentUser$;

  constructor(private activatedRoute: ActivatedRoute, private offerService: OfferService,
     private commentService: CommentService, private formBuilder: FormBuilder, private authService: AuthService) { }

  addCommentFormGroup: FormGroup = this.formBuilder.group({
    'textContent': new FormControl(null, [Validators.required])
  })

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.offerService.getOfferById$(id).subscribe({
        next: (offer) => {
          this.offer = offer;
          this.commentService.getCommentsForOffer$(offer.id).subscribe(comments => {
            this.comments = comments;
          });
        },
        error: (error) => {
          console.error(error);
        } 
      });
    })
  }

  shouldShowErrorForControl(controlName: string, sourceGroup: FormGroup = this.addCommentFormGroup){
    return sourceGroup.controls[controlName].touched && sourceGroup.controls[controlName].invalid;
  }

  handleAddComment(){
    const commentToAdd: AddCommentDto = this.addCommentFormGroup.value;
    this.commentService.addComment$(commentToAdd, this.offer.id).subscribe({
      next: (comment) => {
        this.updateComments();
      },
      error: (error) => {
        console.error(error);
      }
    });
    // this.updateComments();
    this.addCommentFormGroup.reset();
  }

  updateComments(){
    this.commentService.getCommentsForOffer$(this.offer.id).subscribe({
      next: (comments) => {
        this.comments = comments;
      },
      error: (error) => {
        console.log('error');
      }
    });
  }

  deleteCommentHandler(commentId: number){
    const deleteConfirm = confirm('Are you sure you want to delete this comment?');

    if(deleteConfirm){
      this.commentService.deleteComment$(commentId).subscribe({
        next: (response) =>{
          this.updateComments();
        },
        error: (error) => {
          console.error(error);
        }
      })
    }
  }

}
