import {Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges, ChangeDetectionStrategy} from '@angular/core';
import { Course } from '../models/course';
import {CrumbsService} from '../crumbs.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent implements OnInit, OnChanges {
  @Input() data: Course;
  @Output() deleteRequest = new EventEmitter<any>();
  fakeVar: string;

  delete() {
    // console.log('emit delete in course');
    this.deleteRequest.emit(this.data.id);
  }

  edit() {
    this.crumbsService.addNewCrumb(this.data.name, ['/course', this.data.id]);
  }

  constructor(private crumbsService: CrumbsService) {
    // this.fakeVar = 'fakeVar init in constructor';
   // console.log('log in course constructor');
  }

  ngOnInit() {
    // console.log('log in course hook ngOnInit');
   // console.log(this.fakeVar);
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('onChange hook called');
    // console.log('changing', changes);
  }
}
