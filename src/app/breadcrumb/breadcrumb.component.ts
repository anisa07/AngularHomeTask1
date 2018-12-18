import {Component, Input, OnInit} from '@angular/core';
import {Breadcrumb} from './breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent implements OnInit {
  @Input() crumb: Breadcrumb;

  constructor() { }

  ngOnInit() {}
}
