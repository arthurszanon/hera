import { TestBed } from '@angular/core/testing';

import { TextArmarinhoService } from './text-armarinho.service';

describe('TextArmarinhoService', () => {
  let service: TextArmarinhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextArmarinhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
