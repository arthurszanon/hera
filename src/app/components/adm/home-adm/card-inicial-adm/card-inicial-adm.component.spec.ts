import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInicialAdmComponent } from './card-inicial-adm.component';

describe('CardInicialAdmComponent', () => {
  let component: CardInicialAdmComponent;
  let fixture: ComponentFixture<CardInicialAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardInicialAdmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardInicialAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
