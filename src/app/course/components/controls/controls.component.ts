import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {Course} from '../../../models/course';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
})
export class ControlsComponent implements OnInit {
  @Output() deleteRequest = new EventEmitter<any>();

  deleteControl() {
    console.log('emit delete in controls');
    this.deleteRequest.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
