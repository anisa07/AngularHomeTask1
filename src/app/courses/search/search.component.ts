import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {ListPipe} from '../../pipes/list-pipe.pipe';
import {Course} from '../../models/course';
import {CoursesService} from '../courses-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnChanges {
  @Input() searchInput: string;
  @Input() data: Array<Course>;
  @Output() filterData = new EventEmitter<any>();
  @Output() clearFilter = new EventEmitter<any>();
  searchTerm$ = new Subject<string>();

  search() {
    // this.filterData.emit(this.searchInput);
    // this.filterData.emit(this.listPipe.transform(this.data, this.searchInput));
    // this.coursesService.searchCourses(this.searchTerm$);
   // this.filterData.emit(this.coursesService.searchCourses(this.searchTerm$));
      // .subscribe(results => {
      //   this.results = results.results;
      // });
  }

  clear() {
    this.clearFilter.emit(true);
    this.searchInput = '';
  }

  add() {
    this.router.navigate(['create/new']);
  }

  constructor(private listPipe: ListPipe, private router: Router, private coursesService: CoursesService) {
    this.coursesService.searchCourses(this.searchTerm$)
      .subscribe(results => {
        console.log(results);
        // this.filterData.emit(results.results);
      });
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges(changes) {
    console.log('ngOnChange', changes);
  }
}
