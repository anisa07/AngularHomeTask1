import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Component, Directive, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {Course} from '../models/course';

@Directive({
  selector: 'app-course',
})
class CourseComponent {
  @Input() data: Course;
}

@Component({
  template: '<app-courses><app-course *ngFor="let data of courses" [data]="data"></app-course></app-courses>',
})
class TestComponent {
  courses: Array<Course> = [ new Course({
    id: '1test',
    title: 'test',
    creationDate: new Date('10 06 2018'),
    duration: 160,
    description: 'test',
  }),
    new Course({
      id: '2test',
      title: 'test2',
      creationDate: new Date('10 07 2018'),
      duration: 120,
      description: 'test2',
    }),
  ];
}

describe('CoursesComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ TestComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 2 courses video', () => {
    const compiled = fixture.debugElement.nativeElement;
    const videos = compiled.querySelectorAll('app-course');
    expect(videos.length).toBe(2);
  });
});
