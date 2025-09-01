import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListComponentTs } from './car-list.component.ts';

describe('CarListComponentTs', () => {
  let component: CarListComponentTs;
  let fixture: ComponentFixture<CarListComponentTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarListComponentTs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarListComponentTs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
