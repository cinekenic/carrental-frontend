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

  loadCars() {
    this.http.get<Car[]>(this.baseUrl).subscribe((cars) => this.cars.set(cars));
  }

  addCar(car: Partial<Car>): Observable<Car> {
    return this.http.post<Car>(this.baseUrl, car);
  }

  changeStatus(id: number, status: string): Observable<Car> {
    return this.http.put<Car>(`${this.baseUrl}/${id}/status?status=${status}`, {});
  }
}
