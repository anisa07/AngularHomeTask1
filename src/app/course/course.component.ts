import {Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges} from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit, OnChanges {
  @Input() data: Course;
  @Output() deleteRequest = new EventEmitter<any>();
  fakeVar: string;

  delete() {
    console.log('emit delete in course');
    this.deleteRequest.emit(this.data.courseData.id);
  }

  constructor() {
    this.fakeVar = 'fakeVar init in constructor';
    console.log('log in course constructor');
  }

  ngOnInit() {
    console.log('log in course hook ngOnInit');
    console.log(this.fakeVar);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('onChange hook called');
    console.log('changing', changes);
  }
}
