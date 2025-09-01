import { Routes } from '@angular/router';
import { CarListComponentTs } from './components/car-list.component.ts/car-list.component.ts';

export const routes: Routes = [
  { path: '', component: CarListComponentTs },
  { path: 'cars', component: CarListComponentTs },
];
