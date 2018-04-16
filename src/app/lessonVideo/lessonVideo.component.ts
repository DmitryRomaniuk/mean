import { Component, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'lesson-video',
  template: `
    <div>
      <h2>{{title}}</h2>
      <iframe
      [src]="videoURL()"
        allowfullscreen="" frameborder="0" width="854" height="480">
      </iframe>
    </div>
  `
})
export class LessonVideoComponent {
  @Input() title: string;
  @Input() link: string;

  constructor(public sanitizer: DomSanitizer) {
  }

  videoURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.link);
  }
}
