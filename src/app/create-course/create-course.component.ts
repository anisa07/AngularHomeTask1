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
      this.createCourse = false;
      this.date = this.data.date;
      this.duration = this.data.length;
      this.title = this.data.name;
      this.description = this.data.description;
    }
  }

  save() {
    if (!this.createCourse) {
      this.coursesService.updateCourse({
        date: this.date,
        duration: this.duration,
        title: this.title,
        description: this.description,
        id: this.data.id,
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
