import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SectionSliderComponent } from './section-slider/section-slider.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent],
})
export class ComponentsModule {}
