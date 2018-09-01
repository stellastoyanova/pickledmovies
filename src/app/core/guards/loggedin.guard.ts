import { Injectable } from "@angular/core"
import { CanActivate, Router } from "@angular/router"

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem('authtoken')) {
      return true;
    } else {
      this.router.navigate(['/user/login'])
      return false;
    }
  }
}