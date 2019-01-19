import { Component, OnInit } from '@angular/core';
import { OrderByPipe } from '../pipes/order-by.pipe';
import { Course } from '../models/course';
import { CoursesService } from './courses-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: Array<Course>;

  deleteCourse(id) {
    const removeCourse = confirm('Do you really want to delete this course?');
    if (removeCourse) {
      this.courses = this.orderBy.transform(this.coursesService.removeCourse(id));
    }
  }

  filterCourses(result) {
    this.courses = this.orderBy.transform(result.slice());
  }

  clearFilterResults(clearSearchResults) {
    if (clearSearchResults) {
      this.courses = this.orderBy.transform(this.coursesService.getCourses());
    }
  }

  constructor(private orderBy: OrderByPipe, private coursesService: CoursesService) {}

  ngOnInit() {
    this.courses = this.orderBy.transform(this.coursesService.getCourses());
  }
}
