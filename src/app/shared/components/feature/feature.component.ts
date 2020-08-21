import { Component, OnInit, Input } from '@angular/core';

import { Feature } from 'src/app/models/hero/feature.model';

import { fadeInUpAnimation } from "../../../core/animations/slide.animation";

@Component({
  selector: "app-feature",
  templateUrl: "./feature.component.html",
  styleUrls: ["./feature.component.scss"],
  animations: [fadeInUpAnimation],
})
export class FeatureComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
