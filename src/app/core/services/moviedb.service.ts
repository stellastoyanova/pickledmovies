import { Injectable } from '@angular/core'
import { MOVIEDB_KEY, AND_AUTH, Q_AUTH } from '../common/tmdb-creds'
import { MDB } from '../common/moviedb-api'
import { HttpClient } from '@angular/common/http'
import { ActorsMoviesModel } from '../../components/models/actors-movies.model'
import { GenresModel } from '../../components/models/genres.model'

@Injectable()
export class MoviedbService {

  constructor(private http: HttpClient) { }

  getData(page, category: string) {
    if (category[0] === 'm') {
      return this.getMovies(page, category.replace('m', '/'))
    } else if (category[0] === 'g') {
      return this.getMoviesByGenre(page, category.replace('g', ''))
    } else if (category[0] === 'a') {
      return this.getActors(page, category.replace('a', ''))
    }
  }

  getMoviesByActor(actorId) {
    return this.http.get<ActorsMoviesModel>(MDB.movies_genre + Q_AUTH + MOVIEDB_KEY + `&with_cast=${actorId}`)
  }

  getActor(actorId) {
    return this.http.get(MDB.actor(actorId) + Q_AUTH + MOVIEDB_KEY)
  }

  getMovie(movieId: number) {
    return this.http.get(MDB.movie(movieId) + Q_AUTH + MOVIEDB_KEY)
  }

  getMovieCredits(movieId: number) {
    return this.http.get(MDB.movieCredits(movieId) + Q_AUTH + MOVIEDB_KEY)
  }

  getGenres() {
    return this.http.get<GenresModel>(MDB.genres + Q_AUTH + MOVIEDB_KEY)
  }

  private getActors(page = 1, category) {
    return this.http.get<ActorsMoviesModel>(MDB.actors_path + `/${category}${Q_AUTH}${MOVIEDB_KEY}&page=${page}`)
  }

  private getMoviesByGenre(page = 1, genre) {
    return this.http.get<ActorsMoviesModel>(MDB.movies_genre + Q_AUTH + MOVIEDB_KEY + `&with_genres=${genre}&page=${page}`)
  }

  private getMovies(page = 1, category) {
    return this.http.get<ActorsMoviesModel>(MDB.movie_path + category + Q_AUTH + MOVIEDB_KEY + `&page=${page}`)
  }
}
