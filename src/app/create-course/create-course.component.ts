import {Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {Course} from '../models/course';
import {CoursesService} from '../courses/courses-service.service';
import {ValidateNumber} from '../validators/number.only.validators';
import {DateValidator} from '../validators/date.validators';
import * as moment from 'moment';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
})
export class CreateCourseComponent implements OnInit, OnChanges {
  form: FormGroup;
  authorsCopy = [];
  createCourse: Boolean = true;
  @Input() data: Course | undefined;

  date = new FormControl('', [Validators.required, DateValidator()]);
  duration = new FormControl(0, [Validators.required, ValidateNumber]);
  description = new FormControl('', [Validators.maxLength(500), Validators.required]);
  title = new FormControl('', [Validators.maxLength(50), Validators.required]);
  authors = new FormControl([], Validators.required);

  constructor(private router: Router, private coursesService: CoursesService, fb: FormBuilder) {
    this.form = fb.group({
      'date': this.date,
      'duration': this.duration,
      'description': this.description,
      'authors': this.authors,
      'title': this.title,
    });
  }

  setValues() {
    this.form.setValue({
      authors: this.authorsCopy,
      date: this.date.value,
      duration: this.duration.value,
      description: this.description.value,
      title: this.title.value,
    });
  }

  addAuthor(author) {
    this.authorsCopy = [...this.authorsCopy, author];
    this.setValues();
  }

  deleteAuthor(author) {
    this.authorsCopy = this.authorsCopy.filter(item => item.id !== author.id);
    this.setValues();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data.currentValue && changes.data.currentValue.length) {
      const {date, id, authors, name, description, isTopRated, length} = changes.data.currentValue;
      const courseAuthors = authors
        ? authors.map(author => ({
          id: author.id,
          name: `${author.firstName} ${author.lastName}`,
          display: `${author.firstName} ${author.lastName}`,
        }))
        : [];

      this.authorsCopy = courseAuthors.slice();

      this.form.setValue({
        duration: length,
        date: moment(date).format('DD/MM/YYYY'),
        description: description,
        title: name,
        authors: courseAuthors.slice(),
      });
    }
  }

  ngOnInit() {
  }

  save() {
    if (!this.createCourse) {
      this.coursesService.updateCourse({
        date: this.form.get('date').value,
        length: this.form.get('duration').value,
        name: this.form.get('title').value,
        description: this.form.get('description').value,
        id: this.data.id,
        authors: this.form.get('authors').value,
      }).subscribe(() => {
        this.router.navigate(['courses']);
      });
    } else {
      this.coursesService.createCourse({
        date: this.form.get('date').value,
        length: this.form.get('duration').value,
        name: this.form.get('title').value,
        description: this.form.get('description').value,
        authors: this.form.get('authors').value,
      }).subscribe(() => {
        this.router.navigate(['courses']);
      });
    }
  }

  delete() {
    this.router.navigate(['courses']);
  }

  cancel() {
    this.router.navigate(['courses']);
  }
}
