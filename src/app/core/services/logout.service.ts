import { Injectable } from '@angular/core'
import { APP_KEY } from '../common/kinvey-creds'
import { HttpClient } from '@angular/common/http'


const logoutUrl = `https://baas.kinvey.com/user/${APP_KEY}/_logout`

@Injectable()
export class LogoutService {

  constructor(private http: HttpClient) { }

  logout() {
    return this.http.post(logoutUrl, {})
  }
}
