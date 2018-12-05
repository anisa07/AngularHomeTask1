import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {CourseClass} from '../../courseClass';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
})
export class ControlsComponent implements OnInit {
  @Input() data: CourseClass;
  @Output() deleteRequest = new EventEmitter<any>();

  delete() {
    this.deleteRequest.emit(this.data);
  }

  constructor() { }

  ngOnInit() {
  }

}
