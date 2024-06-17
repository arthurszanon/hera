import { TestBed } from '@angular/core/testing';

import { CardInicialService } from './card-inicial.service';

describe('CardInicialService', () => {
  let service: CardInicialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardInicialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
