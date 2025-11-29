import { TestBed } from '@angular/core/testing';

import { Activo } from './activo';

describe('Activo', () => {
  let service: Activo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Activo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
