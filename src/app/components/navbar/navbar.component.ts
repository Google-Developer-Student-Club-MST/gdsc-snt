import { Component } from '@angular/core';
import { SolidButtonComponent } from '../solid-button/solid-button.component';
import { HollowButtonComponent } from '../hollow-button/hollow-button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SolidButtonComponent, HollowButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
