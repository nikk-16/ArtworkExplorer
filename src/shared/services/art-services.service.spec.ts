import { TestBed } from '@angular/core/testing';

import { ArtServicesService } from './art-services.service';

describe('ArtServicesService', () => {
  let service: ArtServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
