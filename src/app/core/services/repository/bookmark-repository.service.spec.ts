import { TestBed } from '@angular/core/testing';

import { BookmarkRepositoryService } from './bookmark-repository.service';

describe('BookmarkRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookmarkRepositoryService = TestBed.get(BookmarkRepositoryService);
    expect(service).toBeTruthy();
  });
});
