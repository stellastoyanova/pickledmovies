import { Routes, RouterModule } from '@angular/router'
import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common'
import { SharedModule } from '../components/shared/shared.module'
import { OnlyLoggedInUsersGuard } from '../core/guards/loggedin.guard'
import { AdminGuard } from '../core/guards/admin.guard'
import { LandingComponent } from '../components/landing/landing.component'
import { OnlyLoggedOutUsersGuard } from '../core/guards/loggedout.guard'
import { AdminComponent } from '../components/admin/admin.component'
import { UserService } from '../core/services/user.service'
import { ErrorComponent } from '../components/shared/error/error.component'


const routes: Routes = [
  { path: '', component: LandingComponent, canActivate: [OnlyLoggedOutUsersGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  { path: 'home', loadChildren: '../components/actors-movies/actors-movies.module#ActorsMoviesModule', canActivate: [OnlyLoggedInUsersGuard] },
  { path: 'user', loadChildren: '../components/auth/auth.module#AuthModule' },
  { path: '**', component: ErrorComponent }

]

@NgModule({
  declarations: [LandingComponent, AdminComponent],
  imports: [RouterModule.forRoot(routes), CommonModule, SharedModule],
  exports: [RouterModule],
  providers: [OnlyLoggedInUsersGuard, OnlyLoggedOutUsersGuard, AdminGuard, UserService]
})
export class RoutingModule {

}