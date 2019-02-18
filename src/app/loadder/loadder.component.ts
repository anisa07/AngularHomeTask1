import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {LoadderService} from '../loadder.service';

@Component({
  selector: 'app-loadder',
  templateUrl: './loadder.component.html',
  styleUrls: ['./loadder.component.css'],
})
export class LoadderComponent implements OnInit, OnDestroy {
  show = false;
  private subscription: Subscription;

  constructor(private loadder: LoadderService) { }

  ngOnInit() {
    this.subscription = this.loadder.loaderState
      .subscribe((state: any) => {
        this.show = state.show;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
