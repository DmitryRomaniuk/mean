import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

interface Task {
  name: string,
  answer: boolean
}

@Component({
  selector: 'lesson-checkbox',
  styleUrls: ['./lessonCheckbox.component.scss'],
  templateUrl: './lessonCheckbox.component.html'
})

export class LessonCheckboxComponent {
  @Input() title: string;
  @Input() tasks: Array<Task>;
  @Output() onTaskChanged: EventEmitter<undefined>;
  answers: boolean[];
  checkBoxGroup: FormGroup;
  task: Task;
  tasksArray: FormArray;

  constructor() {
    this.onTaskChanged = new EventEmitter();
  }

  ngOnInit(): void{
    function validator(g: FormControl, answer: boolean) {
      return g.value === answer ? null : {'mismatch': true};
    }
    this.tasksArray = new FormArray(this.tasks.map((task: Task) => {
        return new FormControl(task.answer, (g: FormControl) => validator(g, task.answer));
      }));
    this.checkBoxGroup = new FormGroup({
      tasksArray: this.tasksArray
    });
    this.answers = this.tasks.map((elem: Task) => elem.answer);
  }

  check() {
    if (this.checkBoxGroup.valid === true ) {
      this.onTaskChanged.emit();
    }
   }
}
