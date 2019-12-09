import { Injectable } from '@angular/core';
import { DataContainerService } from './data-container.service';
import { Bookmark } from '../../../shared/models/bookmark';
import { CleanableContainer } from './cleanable-container';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookmarkRepositoryService } from '../repository/bookmark-repository.service';

@Injectable({
  providedIn: 'root'
})
export class BookmarkContainerService extends DataContainerService<Bookmark[]> implements CleanableContainer {

  constructor(
    private repo: BookmarkRepositoryService
  ) {
    super();
  }

  private cache = {};

  public get bookmarks(): Bookmark[] {
    return this.data;
  }

  public getBookmark$(...args): Observable<Bookmark[]> {
    const key = this.getKey(args);
    if (this.cache[key]) {
      this.updateData(this.cache[key]);
      return this.data$;
    }
    return this.repo.getBookmarks.apply(this.repo, args).pipe(map((items) => {
      this.cache[key] = items;
      return items;
    }));
  }

  public update(bookmark: Bookmark, isDelete = false): void {
    const key = this.getKey(bookmark.group.id);
    if (!Boolean(this.cache[key])) {
      return;
    }
    const index = this.cache[key].findIndex(foundBookmark => foundBookmark.id === bookmark.id);
    if (index !== -1) {
      if (isDelete) {
        this.cache[key].splice(index);
        return;
      }
      this.cache[key][index] = bookmark;
      return;
    }

    this.cache[key].push(bookmark);
  }

  private getKey(...args) {
    return `getBookmark_${args.join('-')}`;
  }

}
