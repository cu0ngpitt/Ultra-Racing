import { TestBed, inject } from '@angular/core/testing';

import { RacingDataService } from './racing-data.service';

describe('RacingDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RacingDataService]
    });
  });

  it('should be created', inject([RacingDataService], (service: RacingDataService) => {
    expect(service).toBeTruthy();
  }));
});
