import { Routes } from '@angular/router';
import { FakeComponentComponent } from './fake-component/fake-component.component';
import { CoursesComponent } from './courses/courses.component';

export const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'fake', component: FakeComponentComponent },
  { path: '',
    redirectTo: 'courses',
    pathMatch: 'full',
  },
];
