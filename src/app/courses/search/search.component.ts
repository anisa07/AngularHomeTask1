import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {from} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {ListPipe} from '../../pipes/list-pipe.pipe';
import {Course} from '../../models/course';
import {CoursesService} from '../courses-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnChanges {
  @Input() data: Array<Course>;
  @Output() filterData = new EventEmitter<any>();
  @Output() clearFilter = new EventEmitter<any>();
  form: FormGroup;

  searchInput = new FormControl();

  search(value) {
    if (value && value.length > 3) {
      const search = from(this.coursesService.searchCourses(value))
        .pipe(debounceTime(400), distinctUntilChanged());
      search.subscribe(courses => this.filterData.emit(courses));
    }
  }

  clear() {
    this.clearFilter.emit(true);
    this.form.reset();
  }

  add() {
    this.router.navigate(['create/new']);
  }

  constructor(
    private listPipe: ListPipe,
    private router: Router,
    private coursesService: CoursesService,
    fb: FormBuilder) {
    this.form = fb.group({
      'searchInput': this.searchInput,
    });
  }

  ngOnInit() {}

  ngOnChanges(changes) {
    // console.log('ngOnChange', changes);
  }
}
