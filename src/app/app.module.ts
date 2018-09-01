import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { RoutingModule } from './routing/routing.module'
import { HttpClientModule } from '@angular/common/http'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { KinveyInterceptor } from './core/interceptors/kinvey.interceptor'
import { SharedModule } from './components/shared/shared.module'


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    RoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: KinveyInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
