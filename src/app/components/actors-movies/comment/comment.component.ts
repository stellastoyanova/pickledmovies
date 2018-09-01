import { Component, OnInit, Input } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { UserService } from '../../../core/services/user.service'
import { CommentModel } from '../../models/comment.model'


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() movieId: number

  constructor(private service: UserService) { }

  ngOnInit() { }

  commentForm = new FormGroup({
    text: new FormControl('')
  })

  onSubmit() {
    this.submitComment(this.commentForm)
    this.commentForm.reset()
  }

  private submitComment(form: FormGroup) {
    this.service.submitComment(this.makeFormToModel(form)).subscribe(data => {
      this.service.onCommentAdd(true)
    },
      err => {
        console.log(err.message)
      })
  }

  private makeFormToModel(form: FormGroup): any {
    return new CommentModel(
      localStorage.getItem('username'),//username is not unique tho!
      this.movieId,
      form.value.text
    )

  }

}
