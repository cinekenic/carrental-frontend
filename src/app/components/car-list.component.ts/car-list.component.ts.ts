import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car';
import { CurrencyPipe } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-car-list.component.ts',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './car-list.component.ts.html',
  styleUrl: './car-list.component.ts.scss',
})
export class CarListComponent implements OnInit {
  private carService = inject(CarService);

  newCar: Partial<Car> = { brand: '', model: '', pricePerDay: undefined };

  @ViewChild('carForm') carForm!: NgForm;

  ngOnInit(): void {
    this.carService.loadCars();
  }

  get cars() {
    return this.carService.cars();
  }

  addCar() {
    this.carService.addCar(this.newCar).subscribe(() => {
      this.carService.loadCars();

      this.newCar = { brand: '', model: '', pricePerDay: undefined };

      this.carForm.resetForm(this.newCar);
    });
  }

  rentCar(car: Car) {
    if (car.status === 'DOSTEPNY') {
      this.carService
        .changeStatus(car.id, 'WYPOZYCZONY')
        .subscribe(() => this.carService.loadCars());
    }
  }

  returnCar(car: Car) {
    if (car.status === 'WYPOZYCZONY') {
      this.carService.changeStatus(car.id, 'DOSTEPNY').subscribe(() => this.carService.loadCars());
    }
  }
}
