import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

class Task {
  constructor(
    public name: string,
    public answer: boolean
  ) {}
}

@Component({
  selector: 'lesson-checkbox',
  styleUrls: ['./lessonCheckbox.component.scss'],
  templateUrl: './lessonCheckbox.component.html'
})

export class LessonCheckboxComponent {
  @Input() title: string;
  @Input() tasks: Array<Object>;
  tasksArray: FormArray;
  checkBoxGroup: FormGroup;
  task: Task;
  answers: boolean[];

  ngOnInit(): void{
    function validator(g: FormControl) {
      return g.value === this ? null : {'mismatch': true};
    }
    this.tasksArray = new FormArray(this.tasks.map((task: Task) => {
        return new FormControl(task.answer, validator.bind(task.answer));
      }));
    this.checkBoxGroup = new FormGroup({
      tasksArray: this.tasksArray
    });
    this.answers = this.tasks.map((elem: Task) => elem.answer);
  }

  check() {
    console.log(this.checkBoxGroup.value)
    console.log(this.checkBoxGroup.valid)
   }
}
