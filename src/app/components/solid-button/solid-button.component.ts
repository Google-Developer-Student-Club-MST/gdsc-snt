import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-solid-button',
  standalone: true,
  imports: [],
  templateUrl: './solid-button.component.html',
  styleUrl: './solid-button.component.scss'
})
export class SolidButtonComponent {
  @Input() customClass!: string;
}
