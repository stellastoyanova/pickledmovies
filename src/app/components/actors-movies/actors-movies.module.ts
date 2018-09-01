import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes } from '@angular/router'
import { ActorsMoviesComponent } from './actors-movies/actors-movies.component'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared/shared.module'
import { HomeComponent } from '../home/home.component'
import { ActorComponent } from './actor/actor.component'
import { MovieComponent } from './movie/movie.component'
import { MoviedbService } from '../../core/services/moviedb.service'
import { CommentComponent } from './comment/comment.component'
import { CommentsListComponent } from './comments-list/comments-list.component'
import { UserService } from '../../core/services/user.service'
import { ReactiveFormsModule } from '@angular/forms'


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movie/:id',
    component: MovieComponent
  },
  {
    path: 'actor/:id',
    component: ActorComponent
  }


]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ActorsMoviesComponent, HomeComponent, ActorComponent, MovieComponent, CommentComponent, CommentsListComponent],
  providers: [MoviedbService, UserService],
  exports: [RouterModule]
})
export class ActorsMoviesModule { }
