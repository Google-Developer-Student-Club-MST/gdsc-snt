import { Component } from '@angular/core';
import { LandingComponent } from '../../components/landing/landing.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LandingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
