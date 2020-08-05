import { Component, OnInit, Input } from '@angular/core';

import { Feature } from 'src/app/models/hero/feature.model';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

@Input() feature: Feature;

  constructor() { }

  ngOnInit(): void {
  }

}
