import { TestBed } from '@angular/core/testing';

import { CulturalDevelopmentService } from './cultural-development.service';

describe('CulturalDevelopmentService', () => {
  let service: CulturalDevelopmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CulturalDevelopmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
