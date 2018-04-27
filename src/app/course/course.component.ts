import { Component } from '@angular/core';
import { LessonVideoComponent } from '../lessonVideo';
import { CourseContentService } from './courseContent.service';
import { ICourse } from '../course/course.interface';

@Component({
  selector: 'course',
  styleUrls: ['./course.component.scss'],
  templateUrl: './course.component.html',
  providers: [LessonVideoComponent]
})
export class CourseComponent {
  item: ICourse;
  step: number;

  constructor(private _items: CourseContentService) {
  }

  public ngOnInit() {
    this.step = 0;
    this.item = this._items.getItem(this.step);
  }

  public changeStep(direction) {
    if (0 < this.step && direction < 0) {
      this.step = this.step + direction
    }
    if (direction > 0 && this.step < this._items.getLength() - 1) {
      this.step = this.step + direction
    }
    this.item = this._items.getItem( this.step );
  }
}
