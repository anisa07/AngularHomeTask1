import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Input() searchInput: string;

  search() {
    console.log(this.searchInput);
  }

  constructor() { }

  ngOnInit() {
  }

}
