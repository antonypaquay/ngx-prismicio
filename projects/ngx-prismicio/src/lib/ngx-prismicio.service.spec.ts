import { TestBed } from '@angular/core/testing';

import { NgxPrismicioService } from './ngx-prismicio.service';

describe('NgxPrismicioService', () => {
  let service: NgxPrismicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPrismicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
