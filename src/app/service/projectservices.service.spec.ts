import { TestBed } from '@angular/core/testing';

import { ProjectservicesService } from './projectservices.service';

describe('ProjectservicesService', () => {
  let service: ProjectservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
