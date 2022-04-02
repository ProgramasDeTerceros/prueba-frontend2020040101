import { TestBed } from '@angular/core/testing';

import { ApiEscuelaService } from './api-escuela.service';

describe('ApiEscuelaService', () => {
  let service: ApiEscuelaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEscuelaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
