import { Routes } from '@angular/router';
import { CarListComponent } from './components/car-list.component.ts/car-list.component.ts';
import { ClientListComponent } from './components/client-list/client-list.component.ts/client-list.component.ts.js';

export const routes: Routes = [
  { path: 'cars', component: CarListComponent },
  { path: 'clients', component: ClientListComponent },
  { path: '', redirectTo: 'cars', pathMatch: 'full' },
];
