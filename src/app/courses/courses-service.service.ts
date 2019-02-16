import {Injectable} from '@angular/core';
import {Course} from '../models/course';
import {HttpClient} from '@angular/common/http';
import {LoadderService} from '../loadder.service';
import {from} from 'rxjs';
import {finalize} from 'rxjs/operators';

const BASE_URL = 'http://localhost:3004/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses: Array<Course>;

  constructor(private http: HttpClient, private  loadder: LoadderService) {
    this.courses = [];
  }

  searchCourses(value) {
    this.loadder.showLoader();
    return from(this.http.get(`${BASE_URL}`, {params: {textFragment: value}}))
      .pipe(finalize(() => {
        this.loadder.hideLoader();
      }));
  }

  getCourses(start, count) {
    this.loadder.showLoader();
    return from(this.http.get(`${BASE_URL}?start=${start}&count=${count}`))
      .pipe(finalize(() => {
        this.loadder.hideLoader();
      }));
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

  createCourse({date, length, name, description, authors}) {
    this.loadder.showLoader();
    return from(this.http.post(`${BASE_URL}`, JSON.stringify({
      date,
      length,
      description,
      authors,
    })))
      .pipe(finalize(() => {
        this.loadder.hideLoader();
      }));
  }

  getCourseById(id) {
    this.loadder.showLoader();
    return from(this.http.get(`${BASE_URL}/${id}`))
      .pipe(finalize(() => {
        this.loadder.hideLoader();
      }));
  }

  updateCourse({date, length, name, description, id, authors}) {
    this.loadder.showLoader();
    return from(this.http.put(`${BASE_URL}/${id}`, JSON.stringify({
      date,
      length,
      description,
      id,
      authors,
    })))
      .pipe(finalize(() => {
        this.loadder.hideLoader();
      }));
  }

  removeCourse(id) {
    this.loadder.showLoader();
    return from(this.http.delete(`${BASE_URL}/${id}`))
      .pipe(finalize(() => {
        this.loadder.hideLoader();
      }));
  }
}
