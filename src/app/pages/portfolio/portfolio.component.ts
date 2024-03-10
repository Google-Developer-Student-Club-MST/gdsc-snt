import { Component } from '@angular/core';
import { AboutComponent } from '../../components/about/about.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [AboutComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
