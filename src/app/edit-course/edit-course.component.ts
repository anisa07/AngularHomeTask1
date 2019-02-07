import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CoursesService} from '../courses/courses-service.service';
import {CrumbsService} from '../crumbs.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css'],
})
export class EditCourseComponent implements OnInit {
  course;

  constructor(private coursesService: CoursesService,
              private route: ActivatedRoute, private crumbsService: CrumbsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.course = this.coursesService.getCourseById(params['id']) || {};
      this.crumbsService.getBreadCrumbs();
      this.crumbsService.addNewCrumb(this.course.courseData.title, []);
    });
  }

}
