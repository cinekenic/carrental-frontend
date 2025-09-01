import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CarService {
  private baseUrl = 'http://localhost:8080/cars';

  // Signal z listą samochodów
  cars = signal<Car[]>([]);

  constructor(private http: HttpClient) {}
}
