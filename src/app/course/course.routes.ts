import { CourseComponent } from './component';

export const routes = [
    {
        path: '', children: [
        {
          path: '',
          redirectTo: '/course/0',
          pathMatch: 'full',
        },
        {
          path: ':id',
          component: CourseComponent
        }
      ]
    },
];
