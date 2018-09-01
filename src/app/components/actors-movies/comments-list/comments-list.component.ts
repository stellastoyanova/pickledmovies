import { Component, OnInit, Input, DoCheck, OnDestroy } from '@angular/core'
import { UserService } from '../../../core/services/user.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit, DoCheck, OnDestroy {

  @Input() movieId: number
  comments: any
  commentAdded: boolean = false
  commentDeleted: boolean = false
  subscription$: Subscription[] = new Array()
  currentUser = localStorage.getItem('username')

  constructor(private service: UserService) { }

  ngOnInit() {
    this.loadComments()
  }

  ngDoCheck() {
    this.subscription$.push(this.service.commentAdded$.subscribe(isAdded => {
      this.commentAdded = isAdded
    }))
    this.subscription$.push(this.service.commentDeleted$.subscribe(isDeleted => {
      this.commentDeleted = isDeleted
    }))

    if (this.commentAdded) {
      this.loadComments()
      this.commentAdded = false
    }

    if (this.commentDeleted) {
      this.loadComments()
      this.commentDeleted = false
    }
  }

  ngOnDestroy() {
    this.subscription$.forEach(x => x.unsubscribe())

  }

  deleteComment(commentId) {
    this.service.deleteComment(commentId).subscribe(data => {
      this.service.onCommentDelete(true)
    })
  }

  private loadComments() {
    this.service.getCommentsforMovie(this.movieId.toString()).subscribe(data => {
      this.comments = data
    })
  }

}
