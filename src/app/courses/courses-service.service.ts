import {Injectable} from '@angular/core';
import {Course} from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses: Array<Course>;

  constructor() {}

  getCourses(): Course[] {
    this.courses = [
      new Course({
        id: '123bbb',
        title: 'Second Video',
        creationDate: new Date('12 15 2018'),
        duration: 100,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend tristique luctus. ' +
          'Praesent interdum, magna et placerat ultrices, mauris tortor molestie mauris, sed fermentum felis elit sed eros.',
      }),
      new Course({
        id: '123aaa',
        title: 'First Video',
        creationDate: new Date('10 06 2018'),
        duration: 120,
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
      new Course({
        id: '123ddd',
        title: 'Forth Video',
        creationDate: new Date('01 15 2018'),
        duration: 156,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend tristique luctus. ' +
          'Praesent interdum, magna et placerat ultrices, mauris tortor molestie mauris, sed fermentum felis elit sed eros.',
      }),
    ].slice();

    return this.courses;
  }

  createCourse(courseData) {
    const course = new Course(courseData);

    this.courses.push(course);

    return this.courses;
  }

  getCourseById(id) {
    return this.courses.find(course => course.courseData.id === id);
  }

  updateCourse() {}

  removeCourse(id) {
    this.courses = this.courses.filter(course => course.courseData.id !== id);

    return this.courses;
  }
}
