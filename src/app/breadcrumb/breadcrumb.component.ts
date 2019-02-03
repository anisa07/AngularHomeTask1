import {Component, Input, OnInit} from '@angular/core';
import {Breadcrumb} from './breadcrumb';
import {CrumbsService} from '../crumbs.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent implements OnInit {
  @Input() crumb: Breadcrumb;
  @Input() index: number;

  constructor(private crumbsService: CrumbsService, private router: Router) {
  }

  navigateCrumb() {
    const route = this.crumbsService.getLink(this.index);

    this.crumbsService.removeTailCrumbs();
    this.router.navigate(route);
  }

  ngOnInit() {
  }
}
