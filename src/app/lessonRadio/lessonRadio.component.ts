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
  answer: number;
  radioGroupTask: FormGroup;
  task: Task;
  tasksArray: FormArray;

  constructor() {
    this.onTaskChanged = new EventEmitter();
  }

  ngOnInit(): void{
    var tasks = this.tasks;
    var answer: number;
    this.tasks.forEach((elem: Task, i: number) => elem.answer ? answer = i : '');
    function validator(g: FormControl) {
      return g.value === tasks[answer].name ? null : {'mismatch': true};
    }
    this.radioGroupTask = new FormGroup({
      radioControlTask: new FormControl('', function(g: FormControl) {return validator(g)})
    });
  }

  check() {
    if (this.radioGroupTask.valid === true ) {
      this.onTaskChanged.emit();
    }
   }
}
