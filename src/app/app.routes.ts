import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { ReactComponent } from './react';
// import { ProfileComponent } from './profile';
import { CourseModule } from './course';
// import { angularProfileCard } from '../../components/main-profile/index';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  // { path: 'posts', loadChildren: './posts#PostsModule' },
  { path: 'course', loadChildren: './course#CourseModule' },
  // { path: 'profile', component: ProfileComponent },
  { path: 'react', component: ReactComponent },
  { path: '**',    component: NoContentComponent },
];
