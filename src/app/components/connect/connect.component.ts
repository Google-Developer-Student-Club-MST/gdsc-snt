import { Component } from '@angular/core';
import { HollowButtonComponent } from '../hollow-button/hollow-button.component';
import { SolidButtonComponent } from '../solid-button/solid-button.component';

@Component({
  selector: 'app-connect',
  standalone: true,
  imports: [HollowButtonComponent, SolidButtonComponent],
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.scss'
})
export class ConnectComponent {

}
