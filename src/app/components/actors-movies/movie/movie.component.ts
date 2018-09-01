import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { MoviedbService } from '../../../core/services/moviedb.service'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{
  movieId: number
  movie: any
  credits: any

  constructor(private route: ActivatedRoute, private service: MoviedbService) { }

  ngOnInit() { 
    this.movieId = this.route.snapshot.params['id']
    this.loadData()
  }


  loadData() {
    this.service.getMovie(this.movieId).subscribe(data => {
      this.movie = data
    })

    this.service.getMovieCredits(this.movieId).subscribe(data => {
      this.credits = data
    })
  }

}
