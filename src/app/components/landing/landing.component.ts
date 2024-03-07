import { Component } from '@angular/core';
import { HollowButtonComponent } from '../hollow-button/hollow-button.component';
import { SolidButtonComponent } from '../solid-button/solid-button.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [SolidButtonComponent, HollowButtonComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
