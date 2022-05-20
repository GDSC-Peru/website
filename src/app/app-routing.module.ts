import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { SpeakersComponent } from './pages/speakers/speakers.component';
import { TeamComponent } from './pages/team/team.component';

export const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		pathMatch: 'full'
	},
	{
		path: 'speakers',
		component: SpeakersComponent,
		pathMatch: 'full'
	},
	{
		path: 'agenda',
		component: ScheduleComponent,
		pathMatch: 'full'
	},
	{
		path: 'team',
		component: TeamComponent,
		pathMatch: 'full'
	},
	{
		path: '**',
		redirectTo: ''
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			relativeLinkResolution: 'legacy',
			initialNavigation: 'enabledBlocking',
			useHash: true
		})
	],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
