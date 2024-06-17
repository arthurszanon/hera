import { TestBed } from '@angular/core/testing';

import { TextMatconService } from './text-matcon.service';

describe('TextMatconService', () => {
  let service: TextMatconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextMatconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
