import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { EventsComponent } from './pages/events/events.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'events', component: EventsComponent },
];
