import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './../core/core.module';
import { SpeakersComponent } from './speakers/speakers.component';

const PAGES = [HomeComponent, SpeakersComponent];


@NgModule({
  declarations: [...PAGES],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class PagesModule { }
