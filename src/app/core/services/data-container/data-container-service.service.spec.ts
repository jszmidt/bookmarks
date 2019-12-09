import { TestBed } from '@angular/core/testing';

import { DataContainerService } from './data-container.service';

describe('DataContainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataContainerService = TestBed.get(DataContainerService);
    expect(service).toBeTruthy();
  });
});
