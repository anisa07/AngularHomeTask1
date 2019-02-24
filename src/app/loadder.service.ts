import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadderService {
  private loaderSubject = new Subject<any>();

  loaderState = this.loaderSubject.asObservable();

  constructor() { }

  showLoader(): void {
    this.loaderSubject.next(<any>{show: true});
  }

  hideLoader(): void {
    this.loaderSubject.next(<any>{show: false});
  }
}
