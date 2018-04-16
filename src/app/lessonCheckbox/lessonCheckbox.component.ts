import { Component, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'lesson-checkbox',
  template: `
    <div>
      <h2>{{title}}</h2>
      <form>
        <div *ngFor="let task of tasks">
          <input type="checkbox" [id]="task.name"
          name="task.name">
          <label [for]="task.name">{{task.name}}</label>
        </div>
        <button mat-button (click)='nextStep()'>Check Answer</button>
      </form>
    </div>
  `
})
export class LessonCheckboxComponent {
  @Input() title: string;
  @Input() tasks: Array<Object>;

  constructor(public sanitizer: DomSanitizer) {
  }

  nextStep() {

  }
}
