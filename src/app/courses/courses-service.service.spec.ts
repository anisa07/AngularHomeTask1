import { TestBed, inject } from '@angular/core/testing';

import { CoursesServiceService } from './courses-service.service';

describe('CoursesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesServiceService]
    });
  });

  it('should be created', inject([CoursesServiceService], (service: CoursesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
