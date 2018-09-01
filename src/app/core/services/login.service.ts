import { Injectable } from '@angular/core'
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { LoginModel } from '../../components/models/login.model'
import { APP_KEY } from '../common/kinvey-creds'

const loginUrl = `https://baas.kinvey.com/user/${APP_KEY}/login`

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  login(loginModel: LoginModel) {
    return this.http.post(loginUrl,
      JSON.stringify(loginModel))
  }
}
