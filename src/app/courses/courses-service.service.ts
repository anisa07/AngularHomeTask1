import {Injectable} from '@angular/core';
import {Course} from '../models/course';
import {HttpClient} from '@angular/common/http';

const BASE_URL = 'http://localhost:3004/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService  {
  courses: Array<Course>;

  constructor(private http: HttpClient) {
    this.courses = [];
  }

  searchCourses(searchInput) {
    return this.http.get(`${BASE_URL}`, {params: {textFragment: searchInput}});
  }

  getCourses(start, count) {
    return this.http.get(`${BASE_URL}?start=${start}&count=${count}`);
  }

  getInitialCourses(): Course[] {
    return [
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
    ];
  }

  createCourse(courseData) {
    const course = new Course(courseData);
    this.courses = [...this.courses, course];

    return this.courses;
  }

  getCourseById(id) {
   // return this.getCourses().find(course => course.courseData.id === id);
  }

  updateCourse({date, duration, title, description, id}) {
    this.courses = this.courses.slice().map(course => {
      // if (course.courseData.id === id) {
      //   course.courseData.description = description;
      //   course.courseData.name = title;
      //   course.courseData.creationDate = date;
      //   course.courseData.length = duration;
      // }
      return course;
    });
  }

  removeCourse(id) {
    // this.courses = this.courses.filter(course => course.courseData.id !== id);

    return this.courses;
  }
}
