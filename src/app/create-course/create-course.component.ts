import {Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import {Course} from '../models/course';
import {CoursesService} from '../courses/courses-service.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
})
export class CreateCourseComponent implements OnInit {
  @Input() date: Date;
  @Input() duration: string | number;
  @Input() description: string;
  @Input() title: string;
  @Input() data: Course | undefined;
  createCourse: Boolean = true;

  constructor(private router: Router, private coursesService: CoursesService) {
  }

  ngOnInit() {
    if (this.data) {
      const {courseData} = this.data;

      this.createCourse = false;
      this.date = courseData.creationDate;
      this.duration = courseData.duration;
      this.title = courseData.title;
      this.description = courseData.description;
    }
  }

  save() {
    if (!this.createCourse) {
      this.coursesService.updateCourse({
        date: this.date,
        duration: this.duration,
        title: this.title,
        description: this.description,
        id: this.data.courseData.id,
      });
    }
    this.router.navigate(['courses']);
  }

  delete() {
    this.router.navigate(['courses']);
  }

  cancel() {
    this.router.navigate(['courses']);
  }
}
