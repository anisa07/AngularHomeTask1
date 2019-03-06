import {Injectable} from '@angular/core';
import {Course} from '../models/course';
import {HttpClient} from '@angular/common/http';
import {LoadderService} from '../loadder.service';
import {from} from 'rxjs';
import {finalize} from 'rxjs/operators';

const BASE_URL = 'http://localhost:3004/courses';
const AUTHORS = 'http://localhost:3004/authors';

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
    return this.http.get(`${BASE_URL}?start=${start}&count=${count}`);
  }

  getAuthors() {
    return this.http.get(`${AUTHORS}`);
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
    return this.http.delete(`${BASE_URL}/${id}`);
  }
}
