import {Component, OnInit, Input, Output, EventEmitter, forwardRef, SimpleChanges, OnChanges} from '@angular/core';
import {CoursesService} from '../../courses/courses-service.service';
import {FormGroup, FormControl, Validators, FormBuilder, NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorsComponent),
      multi: true,
    },
  ],
})
export class AuthorsComponent implements OnInit, OnChanges, ControlValueAccessor {
  @Input() data: Array<any>;

  authors: Array<any> ;

  @Output() emitAddAuthor = new EventEmitter<any>();
  @Output() emitDeleteAuthor = new EventEmitter<any>();

  items: Array<string> = [];
  displayItems: Array<any> = [];

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.coursesService.getAuthors().subscribe((response: any) => {
      this.displayItems = response.map(item => item.name);
      this.items = response.map(item => ({...item, ...{ display: item.name }}));
    });
  }

  findAuthor(value) {
    return this.items.find((item: any) => item.name === value.display);
  }

  addAuthor(value) {
    const author = this.findAuthor(value);

    this.emitAddAuthor.emit(author);
  }

  removeAuthor(value) {
    const author = this.findAuthor(value);

    this.emitDeleteAuthor.emit(author);
  }

  writeValue(value) {}

  onChange() {}

  registerOnChange(fn) {
    this.onChange = fn;
  }

  onTouched() {}

  registerOnTouched(fn) {
   this.onTouched = fn;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data.currentValue) {
      this.authors = changes.data.currentValue || [];
    }
  }
}
