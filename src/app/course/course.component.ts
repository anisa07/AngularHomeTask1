import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CourseClass } from './courseClass';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  @Input() data: CourseClass;
  @Output() deleteRequest = new EventEmitter<any>();

  delete() {
    this.deleteRequest.emit(this.data);
  }

  constructor() { }

  ngOnInit() {
  }

}
