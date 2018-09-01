import { Component, OnInit, Input, OnChanges } from '@angular/core'
import { MoviedbService } from '../../../core/services/moviedb.service'
import { SimpleChanges } from '@angular/core'

@Component({
  selector: 'app-actors-movies',
  templateUrl: './actors-movies.component.html',
  styleUrls: ['./actors-movies.component.css']
})
export class ActorsMoviesComponent implements OnInit, OnChanges {
  data: any
  collectionSize: number
  selector: string
  page: number = 1
  Math: any
  @Input() category: string

  constructor(private service: MoviedbService) { 
    this.Math = Math
  }

  ngOnInit() {
    this.dataLoad(this.page, this.category)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.page = 1
    this.dataLoad(this.page, changes.category.currentValue)
  }

  pageLoad(page) {
    this.dataLoad(page, this.category)
    window.scroll(0, 0)
  }

  dataLoad(page, category) {
    this.selector = this.changeSelector()
    this.data = undefined
    this.service.getData(page, this.category).subscribe(data => {
      this.data = data
      this.collectionSize = data.total_results
      this.page = page
    },
      err => {
        console.log(err)
      })
  }

  private changeSelector() {
    if (this.category[0] === 'm') {
      return this.category.substring(1) + ' movies'
    } else if (this.category[0] === 'a') {
      return this.category.substring(1) + ' actors'
    } else {
      return ''
    }
  }

  createRange(n: number) {
    let arr = [];
    
    for (let i = 0; i < n; i++) {
      arr.push(i)
    }
    return arr
  }

}
