import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagensAdmComponent } from './imagens-adm.component';

describe('ImagensAdmComponent', () => {
  let component: ImagensAdmComponent;
  let fixture: ComponentFixture<ImagensAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagensAdmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagensAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
