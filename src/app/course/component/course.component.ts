import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseService } from '../course.service';
import { ICourse } from '../course.interface';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'course',
  styleUrls: ['./course.component.scss'],
  templateUrl: './course.component.html'
})
export class CourseComponent implements OnInit, OnDestroy {
  public id;
  private item: ICourse;
  private step: number;
  private sub: Subscription;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  public ngOnInit() {
    this.item = {type: '', title: ''};
    this.sub = this.route.params.subscribe((params: Params) => {
      this.step = +params.id;
    });
    this.courseService.getItem(this.step).subscribe((res: ICourse) => {
      this.item = res;
    });
  }

  public changeStep(direction) {
    if (0 < this.step && direction < 0 || direction > 0 && !this.item.lastTask) {
      this.step = this.step + direction;
      this.router.navigate(['course', this.step])
      .then(() => {
        this.courseService.getItem(this.step).subscribe((res: ICourse) => {
          this.item = res;
        });
      } );
    }
  }

  public changeTask() {
    this.changeStep(this.step++);
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
