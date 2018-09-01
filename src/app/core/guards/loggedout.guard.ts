import { Injectable } from "@angular/core"
import { CanActivate, Router } from "@angular/router"

@Injectable()
export class OnlyLoggedOutUsersGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate() {
    if (!localStorage.getItem('authtoken')) {
      return true;
    } else {
      this.router.navigate(['/home'])
      return false;
    }
  }
}