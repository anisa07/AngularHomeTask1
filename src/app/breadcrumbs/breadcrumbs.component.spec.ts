import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Directive, Input} from '@angular/core';
import { Breadcrumb } from '../breadcrumb/breadcrumb';
import {FormsModule} from '@angular/forms';

@Directive({
  selector: 'app-breadcrumb',
})
class BreadcrumbComponent {
  @Input() crumb: Breadcrumb;
}

@Component({
  template: '<app-breadcrumbs><app-breadcrumb *ngFor="let j of crumbs" [crumb]="j"></app-breadcrumb></app-breadcrumbs>',
})
class TestComponent {
  crumbs: Array<Breadcrumb> = [new Breadcrumb('crumb1'), new Breadcrumb('crumb2')];
}

describe('BreadcrumbsComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ TestComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 2 crumbs', () => {
    const compiled = fixture.debugElement.nativeElement;
    const crumbs = compiled.querySelectorAll('app-breadcrumb');
    expect(crumbs.length).toBe(2);
  });
});
