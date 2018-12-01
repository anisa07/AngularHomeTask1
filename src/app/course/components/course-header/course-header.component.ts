import {Component, Input, OnInit} from '@angular/core';
import {CourseClass} from '../../courseClass';

@Component({
  selector: 'app-course-header',
  templateUrl: './course-header.component.html',
  styleUrls: ['./course-header.component.css']
})
export class CourseHeaderComponent implements OnInit {
  @Input() data: CourseClass;

  constructor() { }

  ngOnInit() {
  }

}
