import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { passwordValidator, emailValidator, usernameValidator } from "../../shared/validator/validators.directive"
import { RegisterModel } from '../../models/register.model'
import { Router } from '@angular/router'
import { RegisterService } from '../../../core/services/register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    username: new FormControl('', usernameValidator),
    passwords: new FormGroup({
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    }, passwordValidator),
    email: new FormControl('', emailValidator), 
    age: new FormControl('')
  })

  constructor(private service: RegisterService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.register(this.registerForm)
  }

  private register(form: FormGroup) {
    this.service.register(this.makeFormToModel(form)).subscribe(data => {
      this.router.navigate(['/user/login'])
    },
      err => {
        console.log(err.message)
      })
  }

  private makeFormToModel(form: FormGroup): any {
    console.log(form)
    return new RegisterModel(
      form.value.username,
      form.value.passwords.password,
      form.value.email,
      'USER',
      form.value.age)
  }

}