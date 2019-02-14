import {Component, OnInit, Input, SimpleChanges, OnChanges} from '@angular/core';
import {Router} from '@angular/router';
import {Course} from '../models/course';
import {CoursesService} from '../courses/courses-service.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
})
export class CreateCourseComponent implements OnInit, OnChanges {
  @Input() date: Date;
  @Input() duration: string | number;
  @Input() description: string;
  @Input() title: string;
  @Input() data: Course | undefined;
  @Input() authors: Array<any>;
  createCourse: Boolean = true;

  constructor(private router: Router, private coursesService: CoursesService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data.currentValue) {
      const {date, id, authors, name, description, isTopRated, length} = changes.data.currentValue;
      this.date = date;
      this.authors = authors;
      this.title = name;
      this.description = description;
      this.duration = length;
    }
  }

  ngOnInit() {}

  save() {
    if (!this.createCourse) {
      this.coursesService.updateCourse({
        date: this.date,
        length: this.duration,
        name: this.title,
        description: this.description,
        id: this.data.id,
        authors: this.authors,
      }).subscribe(() => {
        this.router.navigate(['courses']);
      });
    } else {
      this.coursesService.createCourse({
        date: this.date,
        length: this.duration,
        name: this.title,
        description: this.description,
        authors: this.authors,
      }).subscribe(() => {
        this.router.navigate(['courses']);
      });
    }
  }

  delete() {
    this.router.navigate(['courses']);
  }

  cancel() {
    this.router.navigate(['courses']);
  }
}
