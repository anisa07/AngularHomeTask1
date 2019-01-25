import { TestBed, inject } from '@angular/core/testing';

import { CoursesService } from './courses-service.service';

describe('CoursesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesService],
    });
  });

  it('should be created', inject([CoursesService], (service: CoursesService) => {
    expect(service).toBeTruthy();
  }));
});
