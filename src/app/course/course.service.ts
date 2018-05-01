import { Injectable } from '@angular/core';
import { ICourse } from './course.interface';
import { Http, Response } from '@angular/http';

@Injectable()
export class CourseService {
    public items: Array<ICourse>;

    constructor(private http: Http) {
        this.http.get('api/course')
          .subscribe((res: Response) => {
            this.items = res.json();
          });
        this.items = [
          {
            type: '',
            title: '',
          }
        ];
    }

    public getItem(index = 0): ICourse {
      return this.items[index];
    }

    public getLength(): number {
      return this.items.length;
    }
}
