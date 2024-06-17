import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatconComponent } from './matcon.component';

describe('MatconComponent', () => {
  let component: MatconComponent;
  let fixture: ComponentFixture<MatconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
