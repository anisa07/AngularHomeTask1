import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ RouterTestingModule ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have logo', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-logo')).toBeTruthy();
  });

  it('should have user and logout links', () => {
    const compiled = fixture.debugElement.nativeElement;
    const links = compiled.querySelectorAll('a');
    expect(links.length).toBe(0);
  });
});
