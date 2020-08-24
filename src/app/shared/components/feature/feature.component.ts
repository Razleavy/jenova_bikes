import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil, delay } from 'rxjs/operators';

import { Feature } from 'src/app/models/hero/feature.model';
import { fadeInUpAnimation } from "../../../core/animations/fadeInUp.animation";
import { SubjectObserver, IntersectionObserverService } from 'src/app/core/services/intersection-observer.service';

@Component({
  selector: "app-feature",
  templateUrl: "./feature.component.html",
  styleUrls: ["./feature.component.scss"],
  animations: [fadeInUpAnimation]
})
export class FeatureComponent implements OnInit {

  intersecting: string = 'default';

  private _unsubscribe: Subject<void> = new Subject<void>();

  private _intersectionAreaObserver: SubjectObserver = null;

  @ViewChild('intersetionArea') intersectionArea: ElementRef<HTMLDivElement>;

  @Input() feature: Feature;

  get heading(): string {
    return this.feature.heading;
  }

  get text(): string {
    return this.feature.text;
  }

  get image(): string {
    return this.feature.image;
  }

  get isReversed(): string {
    return this.feature.isReversed ? 'row-reverse' : '';
  }

  constructor(private _intersectionObserverService: IntersectionObserverService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this._createObserver();
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
    this._disconnectObserver();
  }

  private _createObserver() {
    this._intersectionAreaObserver = this._intersectionObserverService.createObserver(this.intersectionArea.nativeElement, { rootMargin: '-1px' });
    this._intersectionAreaObserver.whenIntersecting()
      .pipe(
        delay(100),
        takeUntil(this._unsubscribe)
      )
      .subscribe(isIntersecting => {
        this.intersecting = 'animate';
      });
  }

  private _disconnectObserver() {
    if (this._intersectionAreaObserver) {
      this._intersectionAreaObserver.disconnect();
    }
  }
}
