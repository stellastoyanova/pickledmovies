import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  selected: string
  @Input() genres: Array<any>
  @Output() selectedChanged = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  getCategory(category: string): void {
    this.selected = category
    this.selectedChanged.emit(this.selected)
  }

}
