import { Component, OnInit } from '@angular/core';
import { BookmarkGroupRepositoryService } from '../../../core/services/repository/bookmark-group-repository.service';
import { Observable } from 'rxjs';
import { BookmarkGroup } from '../../../shared/models/bookmark-group';
import { Bookmark } from '../../../shared/models/bookmark';
import { BookmarkContainerService } from '../../../core/services/data-container';
import { BookmarkRepositoryService } from '../../../core/services/repository/bookmark-repository.service';


@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss'],
})
export class BookmarkListComponent implements OnInit {

  groups$: Observable<BookmarkGroup[]>;
  bookmarks: Bookmark[];

  constructor(
    private bookmarkContainer: BookmarkContainerService,
    private bookmarkGroupRepository: BookmarkGroupRepositoryService,
    private bookmarkRepository: BookmarkRepositoryService,
  ) {
  }

  ngOnInit(): void {
    this.groups$ = this.bookmarkGroupRepository.getBookmarkGroups();
  }

  getBookmarks(bookmarkGroup: BookmarkGroup) {
    this.bookmarkContainer.getBookmark$(bookmarkGroup.id).subscribe(bookmarks => this.bookmarks = bookmarks);
  }

  onDelete(bookmark: Bookmark) {
    this.bookmarkRepository.deleteBookmark(bookmark.id).subscribe(_ => {
      this.bookmarkContainer.update(bookmark, true);
      this.getBookmarks(bookmark.group);
    });
  }
}

