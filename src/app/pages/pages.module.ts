import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './../core/core.module';
import { SpeakersComponent } from './speakers/speakers.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ScheduleComponent } from './schedule/schedule.component';
import { TeamComponent } from './team/team.component';

const PAGES = [ HomeComponent, SpeakersComponent, ScheduleComponent, TeamComponent ];

@NgModule({
	declarations: [ ...PAGES ],
	imports: [ CommonModule, CoreModule, SlickCarouselModule ]
})
export class PagesModule {}
