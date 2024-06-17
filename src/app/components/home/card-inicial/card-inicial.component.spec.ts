import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInicialComponent } from './card-inicial.component';

describe('CardInicialComponent', () => {
  let component: CardInicialComponent;
  let fixture: ComponentFixture<CardInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardInicialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
