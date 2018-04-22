import { Component, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'lesson-radio',
  template: `
    <div>
      <h2>{{title}}</h2>
      <form>
        <div *ngFor="let task of tasks">
          <input type="radio" [id]="task.name"
          name="task.name">
        <label [for]="task.name">{{task.name}}</label>
        </div>
        <button mat-raised-button color="accent" (click)='nextStep()'>Check Answer</button>
      </form>
    </div>
  `
})
export class LessonRadioComponent {
  @Input() title: string;
  @Input() tasks: Array<Object>;

  constructor(public sanitizer: DomSanitizer) {
  }

  nextStep() {

  }
}
