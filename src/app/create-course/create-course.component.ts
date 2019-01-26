import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
})
export class CreateCourseComponent implements OnInit {
  @Input() date: string;
  @Input() duration: string;
  @Input() description: string;
  @Input() title: string;

  constructor() {
  }

  ngOnInit() {
  }

  save() {
  }

  delete() {
  }
}
