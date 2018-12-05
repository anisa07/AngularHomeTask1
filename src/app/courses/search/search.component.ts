import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnChanges {
  @Input() searchInput: string;

  search() {
    console.log(this.searchInput);
  }

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges(changes) {
    console.log('ngOnChange', changes);
  }
}
