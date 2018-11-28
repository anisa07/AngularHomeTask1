import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CourseComponent } from './course/course.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CoursesComponent } from './courses/courses.component';
import { LogoComponent } from './logo/logo.component';

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
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
