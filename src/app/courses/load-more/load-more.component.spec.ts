import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadMoreComponent } from './load-more.component';
import {By} from '@angular/platform-browser';

describe('LoadMoreComponent', () => {
  let component: LoadMoreComponent;
  let fixture: ComponentFixture<LoadMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadMoreComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load more videos', () => {
    const loadMoreLink = fixture.debugElement.query(By.css('a.load'));
    component.loadMore = jasmine.createSpy('loadMore');
    loadMoreLink.triggerEventHandler('click', null);
    expect(component.loadMore).toHaveBeenCalled();
  });
});
