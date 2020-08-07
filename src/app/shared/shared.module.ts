import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent, FeatureComponent } from './components';

const components = [HeroComponent, FeatureComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule
  ],
  exports: [...components]
})
export class SharedModule { }
