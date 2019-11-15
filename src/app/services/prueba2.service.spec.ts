import { TestBed, inject } from '@angular/core/testing';

import { Prueba2Service } from './prueba2.service';

describe('Prueba2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Prueba2Service]
    });
  });

  it('should be created', inject([Prueba2Service], (service: Prueba2Service) => {
    expect(service).toBeTruthy();
  }));
});
