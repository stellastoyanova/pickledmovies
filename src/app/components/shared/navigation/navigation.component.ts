import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { LogoutService } from '../../../core/services/logout.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: [LogoutService]
})
export class NavigationComponent implements OnInit {

  local = localStorage

  constructor(private service: LogoutService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.service.logout().subscribe(data => {
      localStorage.clear()
      this.router.navigate(['/'])

    },
      err => {
        console.log(err.message)
        this.router.navigate(['/home'])
      })

  }
}