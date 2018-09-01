import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavigationComponent } from './navigation/navigation.component'
import { DropdownComponent } from './dropdown/dropdown.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterModule } from '@angular/router'
import { PaginationComponent } from './pagination/pagination.component'
import { AccordionComponent } from './accordion/accordion.component'
import { ErrorComponent } from './error/error.component'

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule

  ],
  declarations: [NavigationComponent, DropdownComponent, PaginationComponent, AccordionComponent, ErrorComponent],
  exports: [NavigationComponent, DropdownComponent, PaginationComponent, AccordionComponent, ErrorComponent]
})
export class SharedModule { }
