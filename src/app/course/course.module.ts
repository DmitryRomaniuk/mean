import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule }  from '@angular/http';
import {
  MatCardModule,
  MatListModule,
  MatButtonModule,
  MatGridListModule,
  MatToolbarModule
} from '@angular/material';

import { routes } from './course.routes';
import { CourseComponent } from './component';
import { LessonVideoComponent } from './lessonVideo';
import { LessonCheckboxComponent } from './lessonCheckbox';
import { LessonRadioComponent } from './lessonRadio';
import { CourseService } from './course.service';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    CourseComponent,
    LessonVideoComponent,
    LessonCheckboxComponent,
    LessonRadioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule,
    MatRadioModule,
    MatButtonModule,
    MatGridListModule,
    // ApolloModule.forRoot(client)
  ],
  providers: [
    CourseService,
  ]
})
export class CourseModule {
  public static routes = routes;
}
