import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { CourseHeaderComponent } from './course-header.component';
import { Course } from '../../../models/course';

@Component({
  template: '<app-course-header [data]="course"></app-course-header>',
})
class TestComponent {
  public course: Course = new Course({
    id: '123test',
    title: 'Test',
    creationDate: new Date('10 06 2018'),
    duration: 160,
    description: 'test',
  });
}

describe('CourseHeaderComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent, CourseHeaderComponent ],
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

  it('should have title "Test"', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Test');
  });

  it('should have date', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.date').textContent).toEqual('06.10.2018');
  });

  it('should have duration', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.duration').textContent).toEqual('2h 40min');
  });
});
