import { TestBed, inject } from '@angular/core/testing';

import { CrumbsService } from './crumbs.service';

describe('CrumbsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrumbsService]
    });
  });

  it('should be created', inject([CrumbsService], (service: CrumbsService) => {
    expect(service).toBeTruthy();
  }));
});
