import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { LoginService } from '../../core/services/login.service'
import { RegisterService } from '../../core/services/register.service'
import { RouterModule } from '@angular/router'
import { Routes } from '@angular/router'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { KinveyInterceptor } from '../../core/interceptors/kinvey.interceptor'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
]


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [LoginService, RegisterService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: KinveyInterceptor,
      multi: true
    }], 
  exports: [RouterModule]
})
export class AuthModule { }
