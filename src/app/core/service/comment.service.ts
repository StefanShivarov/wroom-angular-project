import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddCommentDto } from '../interfaces/addCommentDto';
import { IComment } from '../interfaces/comment';
import { MessageResponse } from '../interfaces/messageResponse';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  addComment$(comment: AddCommentDto, offerId: number): Observable<IComment>{
    return this.httpClient.post<IComment>(`${environment.apiUrl}/comments?offerId=${offerId}`, comment, {withCredentials: true});
  }

  getCommentsForOffer$(offerId: number): Observable<IComment[]>{
    return this.httpClient.get<IComment[]>(`${environment.apiUrl}/comments?offerId=${offerId}`);
  }

  deleteComment$(commentId: number): Observable<MessageResponse>{
    return this.httpClient.delete<MessageResponse>(`${environment.apiUrl}/comments/${commentId}`);
  }
}
