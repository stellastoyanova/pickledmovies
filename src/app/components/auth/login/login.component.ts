import { Component, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormControl } from '@angular/forms'
import { LoginModel } from '../../models/login.model'
import { Router } from '@angular/router'
import { LoginService } from '../../../core/services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')

  })

  constructor(private service: LoginService, private router : Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.login(this.loginForm)
  }

  private login(form: FormGroup) {
    this.service.login(this.makeFormToModel(form)).subscribe(data => {
      localStorage.setItem('authtoken', data['_kmd'].authtoken)
      localStorage.setItem('username', data['username'])
      localStorage.setItem('role', data['role'])
      this.router.navigate(['/home'])

    },
      err => {
        console.log(err.message)
      })
  }

  private makeFormToModel(form: FormGroup): any {
    return new LoginModel(
      form.value.username,
      form.value.password
    )
  }

}