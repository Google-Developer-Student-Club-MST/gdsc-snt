import { Component } from '@angular/core';
import { HollowButtonComponent } from '../hollow-button/hollow-button.component';
import { SolidButtonComponent } from '../solid-button/solid-button.component';
import { ConnectComponent } from '../connect/connect.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [SolidButtonComponent, HollowButtonComponent, ConnectComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
