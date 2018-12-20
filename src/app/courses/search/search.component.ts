import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {ListPipe} from '../../pipes/list-pipe.pipe';
import {Course} from '../../models/course';

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

  search() {
    this.filterData.emit(this.listPipe.transform(this.data, this.searchInput));
  }

  clear() {
    this.clearFilter.emit(true);
    this.searchInput = '';
  }

  constructor(private listPipe: ListPipe) {
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges(changes) {
    console.log('ngOnChange', changes);
  }
}
