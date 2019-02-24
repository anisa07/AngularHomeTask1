import {Component, OnInit} from '@angular/core';
import {OrderByPipe} from '../pipes/order-by.pipe';
import {Course} from '../models/course';
import {CoursesService} from './courses-service.service';
import {CrumbsService} from '../crumbs.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../store/reducers/index';
import * as authActions from '../store/actions/login';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: Array<Course> = [];
  start: Number = 0;
  count: any = 5;

  constructor(private orderBy: OrderByPipe,
              private coursesService: CoursesService,
              private crumbsService: CrumbsService,
              private store: Store<fromRoot.State>) {
  }

  getCourses() {
    this.coursesService.getCourses(0, this.count).subscribe((response: Array<any>) => {
      this.courses = this.orderBy.transform(response);
    });
  }

  deleteCourse(id) {
    const removeCourse = confirm('Do you really want to delete this course?');
    if (removeCourse) {
      this.coursesService.removeCourse(id).subscribe(() => {
        this.getCourses();
      });
    }
  }

  filterCourses(filteredCourses) {
    this.courses = this.orderBy.transform(filteredCourses);
  }

  loadMore() {
    this.count = this.count + 1;
    this.getCourses();
  }

  clearFilterResults(clearSearchResults) {
    if (clearSearchResults) {
      this.getCourses();
    }
  }

  ngOnInit() {
    this.getCourses();
    this.crumbsService.removeTailCrumbs();
    this.store.dispatch(new authActions.GetLoginInfo());
  }
}
