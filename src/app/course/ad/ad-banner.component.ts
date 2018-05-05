import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ComponentFactoryResolver,
  OnDestroy
} from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem } from './ad-item';
import { AdComponent } from './ad.component';

@Component({
  selector: 'app-ad-banner',
  styleUrls: ['./ad-banner.component.scss'],
  template: `
    <div class="ad-banner">
      <h3>Advertisements</h3>
      <ng-template ad-host></ng-template>
    </div>
  `
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() public ads: AdItem[];
  private currentAdIndex = -1;
  @ViewChild(AdDirective) private adHost: AdDirective;
  private interval: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  public ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  public ngOnDestroy() {
    clearInterval(this.interval);
  }

  private loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAdIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent> componentRef.instance).data = adItem.data;
  }

  private getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
