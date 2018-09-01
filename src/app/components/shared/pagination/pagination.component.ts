import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core'


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit{

  pagesize = 5
  @Input() page: number
  @Input() collectionSize: number
  @Output() pageChanged = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  sayPage(event) {
    this.pageChanged.emit(event)
  }
}
