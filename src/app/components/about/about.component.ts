import { Component } from '@angular/core';
import { HollowButtonComponent } from '../hollow-button/hollow-button.component';
import { SolidButtonComponent } from '../solid-button/solid-button.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SolidButtonComponent, HollowButtonComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {

}
