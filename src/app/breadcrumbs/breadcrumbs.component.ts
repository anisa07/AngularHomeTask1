import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from '../breadcrumb/breadcrumb';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent implements OnInit {
  crumbs: Array<Breadcrumb>;

  constructor() {
    this.crumbs = [new Breadcrumb('Courses')];
  }

  ngOnInit() {}

}
