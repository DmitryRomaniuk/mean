import { Component } from '@angular/core';
import { LessonVideoComponent } from '../lessonVideo';
import { CourseContentService } from './courseContent.service';
import { ICourse } from '../course/course.interface';

@Component({
  selector: 'course',
  template: `
    <div>
      <h1>Course</h1>
      <lesson-video *ngIf="item.type === 'video'" [title]="item.title" [link]="item.src"></lesson-video>
      <lesson-radio *ngIf="item.type === 'radio'" [title]="item.title" [tasks]="item.tasks"></lesson-radio>
      <lesson-checkbox *ngIf="item.type === 'checkbox'" [title]="item.title" [tasks]="item.tasks"></lesson-checkbox>
      <button mat-button (click)='nextStep()'>Next step</button>
    </div>
  `,
  providers: [LessonVideoComponent]
})
export class CourseComponent {
  item: ICourse;
  step: number;

  constructor(private _items: CourseContentService) {
    this.step = 0;
  }

  public ngOnInit() {
    this.item = this._items.getItems();
  }

  public nextStep() {
    this.item = this._items.getItems(this._items.getLength() - 1 > this.step ? ++this.step : this.step);
  }
}
