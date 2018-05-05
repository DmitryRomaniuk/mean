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

import { AppComponent }         from './ad/app.component';
import { HeroJobAdComponent }   from './ad/hero-job-ad.component';
import { AdBannerComponent }    from './ad/ad-banner.component';
import { HeroProfileComponent } from './ad/hero-profile.component';
import { AdDirective }          from './ad/ad.directive';
import { AdService }            from './ad/ad.service';

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    CourseComponent,
    LessonVideoComponent,
    LessonCheckboxComponent,
    LessonRadioComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective
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
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
  providers: [
    CourseService,
    AdService
  ]
})
export class CourseModule {
  public static routes = routes;
}
