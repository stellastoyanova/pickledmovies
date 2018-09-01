import { Injectable } from '@angular/core'
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { RegisterModel } from '../../components/models/register.model'
import { APP_KEY } from '../common/kinvey-creds'

const registerUrl = `https://baas.kinvey.com/user/${APP_KEY}`

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(registerModel: RegisterModel) {
    return this.http.post(registerUrl,
      JSON.stringify(registerModel))
  }
}
