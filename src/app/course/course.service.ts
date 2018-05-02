import { Injectable } from '@angular/core';
import { ICourse } from './course.interface';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CourseService {

    constructor(
      private http: Http
    ) {
    }

    public getItem(index = 0): Observable<ICourse> {
      const url =  'api/course/' + index;
      return this.http.get(url)
        .catch(this.handleError)
        .map((res: Response) => res.json());
    }

    private handleError(error: any) {
      console.error('Error in the course service ' + error);
      return Observable.throw(error.message || error);
    }
}
