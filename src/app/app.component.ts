import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { User } from './shared/models/user';
import { Router } from '@angular/router';
import { BookmarkContainerService, CleanableContainer } from './core/services/data-container';

export const clearDataContainers = async (containers: CleanableContainer[]) => {
  containers.forEach(container => {
    container.clean();
  });
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private auth: AuthService,
    private bookmarkContainer: BookmarkContainerService,
  ) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(_ => {
      clearDataContainers(
        [
          this.bookmarkContainer,
        ]);
    });
  }

  get user(): User {
    return this.auth.currentUserValue;
  }
}
