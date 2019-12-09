import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { BookmarkGroup } from '../../../shared/models/bookmark-group';

@Injectable({
  providedIn: 'root'
})
export class BookmarkGroupRepositoryService {

  url = `${environment.apiUrl}/groups`;

  constructor(private http: HttpClient) {
  }

  getBookmarkGroups(): Observable<BookmarkGroup[]> {
    return this.http.get<BookmarkGroup[]>(`${this.url}`);
  }
}
