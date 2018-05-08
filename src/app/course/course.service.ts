import { Injectable } from '@angular/core';
import { ICourse } from './course.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class CourseService {

    constructor(
      private http: HttpClient
    ) {
    }

    public getItem(index = 0): Observable<ICourse> {
      const url =  'api/course/' + index;
      return this.http.get(url).pipe(
        catchError(this.handleError)
      );
    }

    private handleError(error: any) {
      console.error('Error in the course service ' + error);
      return Observable.throw(error.message || error);
    }
}
