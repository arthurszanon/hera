import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cards01Component } from './cards-01.component';

describe('Cards01Component', () => {
  let component: Cards01Component;
  let fixture: ComponentFixture<Cards01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cards01Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cards01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
