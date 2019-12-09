import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bookmark } from '../../../shared/models/bookmark';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { tap } from 'rxjs/operators';
import { isNumber } from 'util';

@Injectable({
  providedIn: 'root'
})
export class BookmarkRepositoryService {

  url = `${environment.apiUrl}/bookmarks`;

  constructor(private http: HttpClient) {
  }

  getBookmarks(groupId?: number): Observable<Bookmark[]> {
    const url = isNumber(groupId) ? `${this.url}?group.id=${groupId}` : this.url;
    return this.http.get<Bookmark[]>(url);
  }

  getBookmark(id: number): Observable<Bookmark> {
    return this.http.get<Bookmark>(`${this.url}/${id}`);
  }

  putBookmark(bookmark: Bookmark): Observable<Bookmark> {
    return this.http.put<Bookmark>(`${this.url}/${bookmark.id}`, bookmark);
  }

  postBookmark(bookmark: Bookmark): Observable<Bookmark> {
    return this.http.post<Bookmark>(`${this.url}`, bookmark);
  }

  searchBookmarks(term: string): Observable<Bookmark[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Bookmark[]>(`${this.url}/Bookmarks?q=${term}`).pipe(
      tap(() => console.log(`found Bookmarks matching "${term}"`))
    );
  }

  deleteBookmark(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
