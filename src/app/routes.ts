import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoursesComponent } from './courses/courses.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { LoginService } from './login-page/login.service';

export const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'courses', component: CoursesComponent, canActivate: [LoginService] },
  { path: 'course/:id', component: EditCourseComponent, canActivate: [LoginService] },
  { path: 'create/new', component: CreateCourseComponent, canActivate: [LoginService] },
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: NotFoundComponent },
];
