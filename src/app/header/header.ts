import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgbCollapseModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
isMenuCollapsed = true;

closeMenu() {
  this.isMenuCollapsed = true;
}

}
