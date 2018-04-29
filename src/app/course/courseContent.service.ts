import { Injectable } from '@angular/core';
import { ICourse } from './course.interface';

@Injectable()
export class CourseContentService {
    public items: Array<ICourse>;

    constructor() {
        this.items = [
          {
            type: 'checkbox',
            title: 'Check correct checkboxes',
            tasks: [{
              name: 'Task1 true',
              answer: true,
            },{
              name: 'Task2 false',
              answer: false,
            },{
              name: 'Task3 false',
              answer: false,
            }]
          },
          {
            type: 'radio',
            title: 'Check correct radio',
            tasks: [{
              name: 'Task1 false',
              answer: false,
            },{
              name: 'Task2 true',
              answer: true,
            },{
              name: 'Task3 false',
              answer: false,
            }]
          },
          {type: 'video', title: 'First lesson', src: 'https://www.youtube.com/embed/t3KH5LXHi0s'}
        ];
    }

    getItem(index = 0): ICourse {
      return this.items[index];
    }

    getLength(): number {
      return this.items.length;
    }
}
