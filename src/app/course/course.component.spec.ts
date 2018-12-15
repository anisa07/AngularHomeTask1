import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CourseComponent } from './course.component';
import { Course } from '../models/course';

@Component({
  template: '<app-course [data]="course" (deleteRequest)="deleteCourse($event)"></app-course>',
})
class TestComponent {
  public course: Course = new Course({
    id: '123test',
    title: 'Test',
    creationDate: new Date('10 06 2018'),
    duration: 160,
    description: 'test',
  });
  public deleteCourse() {}
}

describe('CourseComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, CourseComponent],
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

  it('should have course description = "test"', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.courseDescription').textContent).toEqual(' test ');
  });
});
