import {Component, OnInit} from '@angular/core';
import {CourseClass} from '../course/courseClass';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: Array<CourseClass>;

  deleteCourse(course) {
    console.log(course);
  }

  constructor() {
    this.courses = [
      new CourseClass({
        id: '123aaa',
        title: 'First Video',
        creationDate: new Date('10 06 2018'),
        duration: 160,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend tristique luctus. ' +
          'Praesent interdum, magna et placerat ultrices, mauris tortor molestie mauris, sed fermentum felis elit sed eros.',
      }),
      new CourseClass({
        id: '123bbb',
        title: 'Second Video',
        creationDate: new Date('10 20 2018'),
        duration: 100,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend tristique luctus. ' +
          'Praesent interdum, magna et placerat ultrices, mauris tortor molestie mauris, sed fermentum felis elit sed eros.',
      }),
      new CourseClass({
        id: '123ccc',
        title: 'Third Video',
        creationDate: new Date('11 01 2018'),
        duration: 60,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend tristique luctus. ' +
          'Praesent interdum, magna et placerat ultrices, mauris tortor molestie mauris, sed fermentum felis elit sed eros.',
      }),
    ];
  }

  ngOnInit() {
  }

}
