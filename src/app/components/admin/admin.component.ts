import { Component, OnInit } from '@angular/core'
import { UserService } from '../../core/services/user.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  comments: any

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getAllComments().subscribe(data => {
      this.comments = data
    })
  }

  deleteComment(commentId) {
    this.service.deleteComment(commentId).subscribe(data => {
      this.ngOnInit()
    })
  }

}
