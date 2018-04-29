import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

interface Task {
  name: string,
  answer: boolean
}

@Component({
  selector: 'lesson-radio',
  styleUrls: ['./lessonRadio.component.scss'],
  templateUrl: './lessonRadio.component.html'
})

export class LessonRadioComponent {
  @Input() title: string;
  @Input() tasks: Array<Task>;
  @Output() onTaskChanged: EventEmitter<undefined>;
  answers: boolean[];
  radioGroup: FormGroup;
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
    this.radioGroup = new FormGroup({
      tasksArray: this.tasksArray
    });
    this.answers = this.tasks.map((elem: Task) => elem.answer);
  }

  check() {
    if (this.radioGroup.valid === true ) {
      this.onTaskChanged.emit();
    }
   }
}
