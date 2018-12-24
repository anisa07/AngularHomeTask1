import {Directive, Input, ElementRef, OnInit} from '@angular/core';
import * as moment from 'moment';

@Directive({
  selector: '[appBorderDirective]',
})
export class BorderDirective implements OnInit {
  @Input() appBorderDirective: Date;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    const courseData = moment(this.appBorderDirective);

    if (courseData > moment()) {
      this.el.nativeElement.style.borderColor = 'blue';
    }

    if (courseData < moment() && courseData >= moment().add(-14, 'days')) {
      this.el.nativeElement.style.borderColor = 'green';
    }
  }

}
