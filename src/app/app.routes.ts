import { Routes } from '@angular/router';
import { CarListComponent } from './components/car-list.component.ts/car-list.component.ts';
import { ClientListComponent } from './components/client-list/client-list.component.ts/client-list.component.ts.js';
import { HomeComponent } from './components/home/home.component.js';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // strona startowa
  { path: 'cars', component: CarListComponent }, // lista aut
  { path: 'clients', component: ClientListComponent }, // lista klientów
  { path: '**', redirectTo: '' }, // fallback
];
