import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from '../core/components/header/header.component';

const components = [
  HeaderComponent
];

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports:[
    ...components
  ]
})
export class CoreModule { }
