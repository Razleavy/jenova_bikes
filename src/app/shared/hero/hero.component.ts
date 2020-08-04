import { Component, OnInit, Input } from '@angular/core';

import { Hero } from 'src/app/models/hero/hero.model';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() hero: Hero;

  get heading(): string {
    return this.hero.heading;
  }

  get subheading(): string {
    return this.hero.subHeading
  }

  get backgroundImage(): SafeStyle {
    return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${this.hero.backgroundImage})`);
  }

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
