import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientListComponentTs } from './client-list.component.ts';

describe('ClientListComponentTs', () => {
  let component: ClientListComponentTs;
  let fixture: ComponentFixture<ClientListComponentTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientListComponentTs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientListComponentTs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
