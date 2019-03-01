import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { Router } from '@angular/router';
import {CrumbsService} from '../../../crumbs.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
})
export class ControlsComponent implements OnInit {
  @Output() deleteRequest = new EventEmitter<any>();
  @Output() editRequest = new EventEmitter<any>();
  @Input() id: string;

  deleteControl() {
    // console.log('emit delete in controls');
    this.deleteRequest.emit();
  }

  editControl() {
    this.editRequest.emit();
    this.router.navigate(['/course', this.id]);
  }

  constructor(private router: Router) { }

  ngOnInit() {}
}
