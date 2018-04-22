import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';

class Task {
  constructor(
    public result: boolean
  ) {}
}

@Component({
  selector: 'lesson-checkbox',
  templateUrl: './lessonCheckbox.component.html'
})

export class LessonCheckboxComponent {
  @Input() title: string;
  @Input() tasks: Array<Object>;
  checkBoxGroup: FormGroup;
  task: Task = new Task (true);

  ngOnInit(): void{
    this.checkBoxGroup = new FormGroup({
      result: new FormControl(this.task.result, [
            Validators.requiredTrue,
          ])
    });
  }

  check() {
    console.log(this.checkBoxGroup.value)
    console.log(this.checkBoxGroup.valid)
   }
}
