import {Injectable} from '@angular/core';
import {Breadcrumb} from './breadcrumb/breadcrumb';

@Injectable({
  providedIn: 'root',
})
export class CrumbsService {
  breadcrumbs: Array<Breadcrumb> = [];

  constructor() {}

  getBreadCrumbs() {
    return this.breadcrumbs;
  }

  addNewCrumb(text, link) {
    if (!this.alreadyHaveCrumb(text)) {
      this.breadcrumbs = [...this.breadcrumbs, new Breadcrumb(text, link)];
    }
  }

  removeTailCrumbs() {
    this.breadcrumbs = this.breadcrumbs.slice(0, 1);
  }

  getLink(item) {
    return this.breadcrumbs[item].link;
  }

  removeCrumbs() {
    this.breadcrumbs = [];
  }

  alreadyHaveCrumb(text) {
    return this.getBreadCrumbs().find(crumb => crumb.text === text);
  }
}
