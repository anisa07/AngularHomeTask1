import {Component, OnInit} from '@angular/core';
import {Course} from '../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: Array<Course>;
  backup: Array<Course>;

  deleteCourse(id) {
    console.log('courseId = ', id);
  }

  filterCourses(result) {
    this.courses = result.slice();
  }

  clearFilterResults(clearSearchResults) {
    if (clearSearchResults) {
      this.courses = this.backup.slice();
    }
  }

  constructor() {
    this.backup = [
      new Course({
        id: '123aaa',
        title: 'First Video',
        creationDate: new Date('10 06 2018'),
        duration: 120,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend tristique luctus. ' +
          'Praesent interdum, magna et placerat ultrices, mauris tortor molestie mauris, sed fermentum felis elit sed eros.',
      }),
      new Course({
        id: '123bbb',
        title: 'Second Video',
        creationDate: new Date('12 15 2018'),
        duration: 100,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend tristique luctus. ' +
          'Praesent interdum, magna et placerat ultrices, mauris tortor molestie mauris, sed fermentum felis elit sed eros.',
      }),
      new Course({
        id: '123ccc',
        title: 'Third Video',
        creationDate: new Date('01 15 2019'),
        duration: 55,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend tristique luctus. ' +
          'Praesent interdum, magna et placerat ultrices, mauris tortor molestie mauris, sed fermentum felis elit sed eros.',
      }),
    ];
    this.courses = this.backup.slice();
  }

  ngOnInit() {
  }
}
