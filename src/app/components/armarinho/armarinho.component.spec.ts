import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmarinhoComponent } from './armarinho.component';

describe('ArmarinhoComponent', () => {
  let component: ArmarinhoComponent;
  let fixture: ComponentFixture<ArmarinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArmarinhoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArmarinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
