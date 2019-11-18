import { TestBed, inject } from '@angular/core/testing';

import { DetenidosdesaparecidosService } from './detenidosdesaparecidos.service';

describe('DetenidosdesaparecidosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetenidosdesaparecidosService]
    });
  });

  it('should be created', inject([DetenidosdesaparecidosService], (service: DetenidosdesaparecidosService) => {
    expect(service).toBeTruthy();
  }));
});
