import { TestBed } from '@angular/core/testing';

import { BookmarkContainerService } from './bookmark-container.service';

describe('BookmarkContainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookmarkContainerService = TestBed.get(BookmarkContainerService);
    expect(service).toBeTruthy();
  });
});
