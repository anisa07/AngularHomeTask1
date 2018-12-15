import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Breadcrumb } from './breadcrumb';
import { BreadcrumbComponent } from './breadcrumb.component';

@Component({
  template: '<app-breadcrumb [crumb]="crumb"></app-breadcrumb>',
})
class TestComponent {
  public crumb: Breadcrumb = new Breadcrumb('TestCrumb');
}

describe('BredcrumbComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ TestComponent, BreadcrumbComponent ],
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

  it('should render crumb name in <a> tags', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain('TestCrumb /');
  }));
});
