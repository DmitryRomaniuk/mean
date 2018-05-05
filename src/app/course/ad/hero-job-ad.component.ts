import { Component, Input } from '@angular/core';

import { AdComponent } from './ad.component';

@Component({
  styleUrls: ['./hero-job-ad.component.scss'],
  template: `
    <div class="job-ad">
      <h4>{{data.headline}}</h4>
      {{data.body}}
    </div>
  `
})
export class HeroJobAdComponent implements AdComponent {
  @Input() public data: any;
}
