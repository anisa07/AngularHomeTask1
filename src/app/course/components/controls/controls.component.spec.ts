import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlsComponent } from './controls.component';
import {By} from '@angular/platform-browser';

describe('ControlsComponent', () => {
  let component: ControlsComponent;
  let fixture: ComponentFixture<ControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlsComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger delete course', () => {
    const deleteLink = fixture.debugElement.query(By.css('.deleteLink'));
    component.deleteControl = jasmine.createSpy('deleteControl');
    deleteLink.triggerEventHandler('click', null);
    expect(component.deleteControl).toHaveBeenCalled();
  });
});
