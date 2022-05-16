import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './../core/core.module';
import { SpeakersComponent } from './speakers/speakers.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ScheduleComponent } from './schedule/schedule.component';

const PAGES = [ HomeComponent, SpeakersComponent ];

@NgModule({
	declarations: [ ...PAGES, ScheduleComponent ],
	imports: [ CommonModule, CoreModule, SlickCarouselModule ]
})
export class PagesModule {}
