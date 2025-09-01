import { Routes } from '@angular/router';
import { CarListComponent } from './components/car-list.component.ts/car-list.component.ts';

export const routes: Routes = [
  { path: '', component: CarListComponent },
  { path: 'cars', component: CarListComponent },
];
