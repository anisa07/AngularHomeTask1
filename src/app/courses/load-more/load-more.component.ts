import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.css'],
})
export class LoadMoreComponent implements OnInit {

  loadMore() {
    console.log('Load More');
  }

  constructor() { }

  ngOnInit() {
  }

}