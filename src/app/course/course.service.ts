import { Injectable } from '@angular/core';
import { ICourse } from './course.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription, asyncScheduler, throwError } from 'rxjs';
import { catchError, map, delay, take } from 'rxjs/operators';
import { AsyncValidatorFn, ValidationErrors } from '@angular/forms';

@Injectable()
export class CourseService {
    public step: number;

    constructor(
      private http: HttpClient
    ) {
    }

    public validateAnswer(g, answer) {
      return Observable.create(
        (observer): null | {mismatch: true} =>
          observer.next(g.value === answer ? null : { mismatch: true })
      )
        .pipe(
          take(1),
          delay(5000),
          map((res: null | ValidationErrors) => res)
        );
    }

    public getItem(index = 0): Observable<ICourse> {
      const url =  'api/course/' + index;
      return this.http.get(url).pipe(
        catchError(this.handleError),
        map((res: ICourse) => res)
      );
    }

    private handleError(error: any) {
      console.error('Error in the course service ' + error);
      return throwError(error.message || error);
    }
}
