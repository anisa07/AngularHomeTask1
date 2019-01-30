import { Routes } from '@angular/router';
import { FakeComponentComponent } from './fake-component/fake-component.component';
import { ContentComponent } from './content/content.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateCourseComponent } from './create-course/create-course.component';

export const routes: Routes = [
  { path: 'content', component: ContentComponent },
  { path: 'fake', component: FakeComponentComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'create-course', component: CreateCourseComponent },
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
