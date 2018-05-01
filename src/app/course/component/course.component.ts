import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CourseService } from '../course.service';
import { ICourse } from '../course.interface';

@Component({
  selector: 'course',
  styleUrls: ['./course.component.scss'],
  templateUrl: './course.component.html'
})
export class CourseComponent {
  private item: ICourse;
  private step: number;

  constructor(
    private _items: CourseService
  ) {
  }

  public ngOnInit() {
    this.step = 0;
    this.item = this._items.getItem(this.step);
  }

  public changeStep(direction) {
    if (0 < this.step && direction < 0) {
      this.step = this.step + direction;
    }
    if (direction > 0 && this.step < this._items.getLength() - 1) {
      this.step = this.step + direction;
    }
    this.item = this._items.getItem( this.step );
  }

  public changeTask() {
    this.changeStep(this.step++);
  }
}
