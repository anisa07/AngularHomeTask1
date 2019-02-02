import {Component, OnInit, Input} from '@angular/core';
import { Breadcrumb } from '../breadcrumb/breadcrumb';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent implements OnInit {
  @Input() crumbs: Array<Breadcrumb> = [];

  constructor() {
    // this.crumbs = [new Breadcrumb('Courses', '/courses')];
  }

  ngOnInit() {}
}
