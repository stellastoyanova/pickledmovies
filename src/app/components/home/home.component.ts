import { Component, OnInit } from '@angular/core'
import { MoviedbService } from '../../core/services/moviedb.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MoviedbService]
})
export class HomeComponent implements OnInit {
  movies: any
  genres: any
  collectionSize: number
  selectedCategory: string = 'mpopular'

  constructor(private service: MoviedbService) { }

  ngOnInit(): void {
    this.service.getGenres().subscribe(data => {
      this.genres = data.genres
    }, err => {
      console.log(err)
    })
  }

  getSelectedCategory(event) {
    this.selectedCategory = event
  }

}
