import { TestBed, inject } from '@angular/core/testing';

import { LoadderService } from './loadder.service';

describe('LoadderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadderService]
    });
  });

  it('should be created', inject([LoadderService], (service: LoadderService) => {
    expect(service).toBeTruthy();
  }));
});
