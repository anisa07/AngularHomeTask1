import {Component, Input, OnInit} from '@angular/core';
import { CourseClass } from './courseClass';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  @Input() data: CourseClass;

  constructor() { }

  ngOnInit() {
  }

}
