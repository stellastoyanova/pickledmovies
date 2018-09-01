import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { MoviedbService } from '../../../core/services/moviedb.service'

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  actorId: number
  actor: any
  movies: any

  constructor(private route: ActivatedRoute, private service: MoviedbService) { }

  ngOnInit() {
    this.actorId = this.route.snapshot.params['id']
    this.loadData()
  }


  loadData() {
    this.service.getActor(this.actorId).subscribe(data => {
      this.actor = data
    })

    this.service.getMoviesByActor(this.actorId).subscribe(data => {
      this.movies = data
    })


  }

}
