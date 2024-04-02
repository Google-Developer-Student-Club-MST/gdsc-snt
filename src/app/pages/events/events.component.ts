import { Component } from '@angular/core';
import { PastEventsComponent } from '../../components/past-events/past-events.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [PastEventsComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {

}
