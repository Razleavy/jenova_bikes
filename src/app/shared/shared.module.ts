import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from "@angular/material/button";

import { HeroComponent, FeatureComponent } from './components';

const components = [HeroComponent, FeatureComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [...components, MatButtonModule]
})
export class SharedModule { }
