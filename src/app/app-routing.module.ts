import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SpeakersComponent } from './pages/speakers/speakers.component';

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
		path: '**',
		redirectTo: ''
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabledBlocking' }) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
