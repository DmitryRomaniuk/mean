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
  styleUrls: ['./lessonCheckbox.component.scss'],
  templateUrl: './lessonCheckbox.component.html'
})

export class LessonCheckboxComponent {
  @Input() title: string;
  @Input() tasks: Array<Object>;
  checkBoxGroup: FormGroup;
  task: Task = new Task (true);
  answers: Task[];

  ngOnInit(): void{
    // tasks: [{
    //   name: 'Task1 true',
    //   answer: true,
    // },{
    //   name: 'Task2 false',
    //   answer: false,
    // },{
    //   name: 'Task3 false',
    //   answer: false,
    // }]
    this.answers = this.tasks.map(element: {name: string, answer: boolean} => new Task(element.answer));
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
