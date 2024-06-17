import { TestBed } from '@angular/core/testing';

import { ClientesCadastradosService } from './clientes-cadastrados.service';

describe('ClientesCadastradosService', () => {
  let service: ClientesCadastradosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientesCadastradosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
