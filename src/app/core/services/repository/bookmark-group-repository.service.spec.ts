import { TestBed } from '@angular/core/testing';

import { BookmarkGroupRepositoryService } from './bookmark-group-repository.service';

describe('BookmarkGroupRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookmarkGroupRepositoryService = TestBed.get(BookmarkGroupRepositoryService);
    expect(service).toBeTruthy();
  });
});
