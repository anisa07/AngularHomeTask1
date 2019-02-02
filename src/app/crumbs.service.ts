import {Injectable} from '@angular/core';
import {Breadcrumb} from './breadcrumb/breadcrumb';

@Injectable({
  providedIn: 'root',
})
export class CrumbsService {
  breadcrumbs: Array<Breadcrumb> = [];

  constructor() {
  }

  getBreadCrumbs() {
    return this.breadcrumbs;
  }

  addNewCrumb(text, link) {
    this.breadcrumbs = [...this.breadcrumbs, new Breadcrumb(text, link)];
  }

  removeTailCrumbs(itemNum) {
    this.breadcrumbs = this.breadcrumbs.slice(0, itemNum + 1);
  }

  getLink(item) {
    return this.breadcrumbs[item].link;
  }

  removeCrumbs() {
    this.breadcrumbs = [];
  }

  alreadyHaveCrumb(text) {
    return this.breadcrumbs.find(crumb => crumb.text === text);
  }
}
