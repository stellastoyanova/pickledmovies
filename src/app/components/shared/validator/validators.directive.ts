import { AbstractControl } from "@angular/forms"


export function passwordValidator(control: AbstractControl): any {
    let err = {}
    let pass = control.get('password')
    let conf = control.get('confirmPassword')
    let regx = /[a-zA-Z0-9]{4,16}/g

    if (!regx.test(pass.value) && pass.touched) {

        err['invalidPass'] = 'Invalid password!'
    }

    if (pass.value !== conf.value) {
        err['passMismatch'] = 'Passwords missmatch!'
    }


    return Object.keys(err).length === 0 ? null : err

}

export function usernameValidator(control: AbstractControl): { [key: string]: any; } {
    let val: string = control.value;
    return (/[a-zA-Z0-9]{4,24}/g.test(val)) ?
        null :
        { 'invalidUsername': 'Invalid username!' }
}

export function emailValidator(control: AbstractControl): { [key: string]: any; } {
    let val: string = control.value;
    return (/^[^@\s]+@[^@\s]+\.[^@\s]+$/g.test(val)) ?
        null :
        { 'invalidEmail': 'Invalid email!' }
}

