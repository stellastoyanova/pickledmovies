import { Injectable } from '@angular/core'
import { APP_KEY } from '../common/kinvey-creds'
import { HttpClient, HttpHeaders, HttpUrlEncodingCodec } from '@angular/common/http'
import { CommentModel } from '../../components/models/comment.model'
import { Subject } from 'rxjs'


const commentsUrl = `https://baas.kinvey.com/appdata/${APP_KEY}/comments`

@Injectable()
export class UserService {

  private commentAddedSource = new Subject<boolean>()
  private commentDeletedSource = new Subject<boolean>()

  commentAdded$ = this.commentAddedSource.asObservable()
  commentDeleted$ = this.commentDeletedSource.asObservable()

  constructor(private http: HttpClient) { }

  onCommentAdd(isAdded: boolean) {
    this.commentAddedSource.next(isAdded);
  }

  onCommentDelete(isDeleted: boolean) {
    this.commentDeletedSource.next(isDeleted)
  }

  deleteComment(commentId: string) {
    return this.http.delete(`${commentsUrl}/${commentId}`,
      {
        headers: this.createHeader()
      })
  }

  submitComment(commentModel: CommentModel) {
    return this.http.post(commentsUrl,
      JSON.stringify(commentModel),
      {
        headers: this.createHeader()
      })
  }

  getAllComments() {
    return this.http.get(commentsUrl, {
      headers: this.createHeader()
    })
  }

  getCommentsforMovie(movieId: string) {
    let encoded = encodeURI(`${commentsUrl}/?query={"movieId": "${movieId}"}`)

    return this.http.get(encoded,
      {
        headers: this.createHeader()
      }
    )
  }
  private createHeader() {//Not using the http interceptor here because CommentComponent is part of ActorsMovies module - cant provide it!
    return new HttpHeaders({
      'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
      'Content-Type': "application/json"
    })
  }

}
