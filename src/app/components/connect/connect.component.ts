import { Component } from '@angular/core';
import { HollowButtonComponent } from '../hollow-button/hollow-button.component';
import { TransparentButtonComponent } from '../transparent-button/transparent-button.component';

@Component({
  selector: 'app-connect',
  standalone: true,
  imports: [HollowButtonComponent, TransparentButtonComponent],
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.scss'
})
export class ConnectComponent {

}
