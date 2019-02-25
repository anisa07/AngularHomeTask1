import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.css'],
})
export class LoadMoreComponent implements OnInit {
  @Output() load = new EventEmitter();

  loadMore() {
    this.load.emit();
    // console.log('Load More');
  }

  constructor() { }

  ngOnInit() {}
}
