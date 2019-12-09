import { Component, OnInit } from '@angular/core';
import { BookmarkGroupRepositoryService } from '../../../core/services/repository/bookmark-group-repository.service';
import { BookmarkGroup } from '../../../shared/models/bookmark-group';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookmarkContainerService } from '../../../core/services/data-container';
import { Router } from '@angular/router';
import { BookmarkRepositoryService } from '../../../core/services/repository/bookmark-repository.service';

@Component({
  selector: 'app-bookmark-add',
  templateUrl: './bookmark-add.component.html',
  styleUrls: ['./bookmark-add.component.scss']
})
export class BookmarkAddComponent implements OnInit {

  groups: BookmarkGroup[] = [];

  formBookmark = new FormGroup({
    name: new FormControl('', [Validators.required]),
    group: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private bookmarkGroupRepository: BookmarkGroupRepositoryService,
    private bookmarkRepository: BookmarkRepositoryService,
    private bookmarkContainer: BookmarkContainerService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.bookmarkGroupRepository.getBookmarkGroups().subscribe(groups => this.groups = groups);
  }

  get controls() {
    return this.formBookmark.controls;
  }

  onSubmit() {
    if (this.formBookmark.invalid) {
      return;
    }
    const groupId = parseInt(this.formBookmark.value.group, 10);
    this.formBookmark.value.group = this.groups.find(group => group.id === groupId);
    this.bookmarkRepository.postBookmark(this.formBookmark.value).subscribe(bookmark => {
      this.bookmarkContainer.update(bookmark);
      this.router.navigateByUrl('/bookmarks');
    });
  }


}
