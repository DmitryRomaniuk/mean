import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { CourseService } from '../course.service';
import { AsyncValidatorFn } from '@angular/forms';
import { Observable, interval } from 'rxjs';
import { distinctUntilChanged, map, merge, timeInterval } from 'rxjs/operators';


interface Task {
  name: string;
  answer: boolean;
}

@Component({
  selector: 'lesson-checkbox',
  styleUrls: ['./lessonCheckbox.component.scss'],
  templateUrl: './lessonCheckbox.component.html'
})

export class LessonCheckboxComponent implements OnInit {
  @Input() public title: string;
  @Input() public tasks: Task[];
  @Output() public onTaskChanged: EventEmitter<undefined>;
  public checkBoxGroup: FormGroup;
  public tasksArray: FormArray;

  constructor(
    private courseService: CourseService,
  ) {
    this.onTaskChanged = new EventEmitter();
    }

  public ngOnInit(): void {
    let validator = (answer: boolean, g: FormControl) => {
      return this.courseService.validateAnswer(g, answer);
    };
    this.tasksArray = new FormArray(this.tasks.map((task: Task) => {
      return new FormControl(task.answer, null, validator.bind(this, task.answer));
    }));
    this.checkBoxGroup = new FormGroup({
      tasksArray: this.tasksArray
    });
  }

  public check() {
    this.checkBoxGroup.statusChanges.pipe(
      // @todo Temporary async validator fix until
      // https://github.com/angular/angular/issues/13200 and
      // https://github.com/angular/angular/issues/14542 are addressed.
      merge(
        interval(250)
          .pipe(
            map(() => this.checkBoxGroup.status)
          )
      ),
      distinctUntilChanged(), // Don't keep emitting the same status
    ).subscribe((s) => {
      console.log(s);
    });
    if (this.checkBoxGroup.valid === true) {
      this.onTaskChanged.emit();
    }
  }
}
