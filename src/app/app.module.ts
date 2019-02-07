import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CourseComponent } from './course/course.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { LogoComponent } from './logo/logo.component';
import { ControlsComponent } from './course/components/controls/controls.component';
import { CourseHeaderComponent } from './course/components/course-header/course-header.component';
import { SearchComponent } from './courses/search/search.component';
import { LoadMoreComponent } from './courses/load-more/load-more.component';
import { FakeComponentComponent } from './fake-component/fake-component.component';
import { CoursesComponent } from './courses/courses.component';
import { routes } from './routes';
import { BorderDirective } from './directives/border-directive.directive';
import { TimePipe } from './pipes/time-pipe.pipe';
import { ListPipe } from './pipes/list-pipe.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditCourseComponent } from './edit-course/edit-course.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    BreadcrumbComponent,
    CourseComponent,
    BreadcrumbsComponent,
    CoursesComponent,
    LogoComponent,
    ControlsComponent,
    CourseHeaderComponent,
    SearchComponent,
    LoadMoreComponent,
    FakeComponentComponent,
    BorderDirective,
    TimePipe,
    ListPipe,
    OrderByPipe,
    LoginPageComponent,
    CreateCourseComponent,
    NotFoundComponent,
    EditCourseComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
  providers: [ListPipe, OrderByPipe],
  exports: [RouterModule],
})
export class AppModule implements OnInit {
  constructor() { }

  ngOnInit() {}
}
