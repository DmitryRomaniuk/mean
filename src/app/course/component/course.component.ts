import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseService } from '../course.service';
import { ICourse } from '../course.interface';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AdService } from '../ad/ad.service';
import { AdItem } from '../ad/ad-item';

@Component({
  selector: 'course',
  styleUrls: ['./course.component.scss'],
  templateUrl: './course.component.html'
})
export class CourseComponent implements OnInit, OnDestroy {
  public ads: AdItem[];
  private item: ICourse;
  private step: number;
  private subRouter: Subscription;
  private subService: Subscription;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router,
    private adService: AdService
  ) {
  }

  public ngOnInit() {
    this.item = {type: '', title: ''};
    this.subRouter = this.route.params.subscribe((params: Params) => {
      this.step = +params.id;
    });
    this.subService = this.courseService.getItem(this.step).subscribe((res: ICourse) => {
      this.item = res;
    });
    this.ads = this.adService.getAds();
  }

  public changeStep(direction) {
    if (0 < this.step && direction < 0 || direction > 0 && !this.item.lastTask) {
      this.step = this.step + direction;
      this.router.navigate(['course', this.step])
        .then(() => {
          this.courseService.getItem(this.step).subscribe((res: ICourse) => {
            this.item = res;
          });
        });
    }
  }

  public changeTask() {
    this.changeStep(1);
  }

  public ngOnDestroy() {
    this.subRouter.unsubscribe();
    this.subService.unsubscribe();
  }
}
