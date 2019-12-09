import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.router.navigateByUrl('/auth/logout');
  }

  addNew() {
    this.router.navigateByUrl('/bookmarks/add');
  }

  list() {
    this.router.navigateByUrl('/bookmarks');
  }

}
