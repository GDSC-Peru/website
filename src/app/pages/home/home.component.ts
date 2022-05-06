import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent {
	organizer = [
		{
			label: 'Google Developer Students Club de la Universidad Nacional San Luis Gonzaga',
			img: './../../../assets/icons/logo_gdsc_unica.svg',
			url: 'https://gdsc.community.dev/san-luis-gonzaga/'
		},
		{
			label: 'Google Developer Students Club de la Universidad Tecnológica del Perú',
			img: './../../../assets/icons/logo_gdsc_utp.svg',
			url: 'https://gdsc.community.dev/universidad-tecnologica-del-peru/'
		},
		{
			label: 'Google Developer Students Club de la Universidad Nacional de Ingeniería',
			img: './../../../assets/icons/logo_gdsc_uni.svg',
			url: 'https://gdsc.community.dev/universidad-nacional-de-ingenieria/'
		}
	];
	sponsors = [
		// {
		// 	title: 'Sponsors Oro',
		// 	sponsorCollections: [
		// 		{
		// 			label: 'Google Developer Students Club de la Universidad Nacional de Ingeniería',
		// 			img: './../../../assets/icons/logo_gdsc_utp.svg',
		// 			url: 'https://gdsc.community.dev/universidad-nacional-de-ingenieria/'
		// 		}
		// 	]
		// },
		// {
		// 	title: 'Sponsors Plata',
		// 	sponsorCollections: [
		// 		{
		// 			label: 'Google Developer Students Club de la Universidad Nacional de Ingeniería',
		// 			img: './../../../assets/icons/logo_gdsc_utp.svg',
		// 			url: 'https://gdsc.community.dev/universidad-nacional-de-ingenieria/'
		// 		}
		// 	]
		// },
		// {
		// 	title: 'Sponsors Bronce',
		// 	sponsorCollections: [
		// 		{
		// 			label: 'Google Developer Students Club de la Universidad Nacional de Ingeniería',
		// 			img: './../../../assets/icons/logo_gdsc_utp.svg',
		// 			url: 'https://gdsc.community.dev/universidad-nacional-de-ingenieria/'
		// 		}
		// 	]
		// }
	];
	constructor() {}

	speakersCount: number = 0;

	speakersCountStop: any = setInterval(() => {
		this.speakersCount++;

		if (this.speakersCount == 40) {
			clearInterval(this.speakersCountStop);
		}

	}, 100);

	sponsorCount: number = 0;

	sponsorCountStop: any = setInterval(() => {
		this.sponsorCount++;

		if (this.sponsorCount == 1) {
			clearInterval(this.sponsorCountStop);
		}

	}, 180);

	ssesionesCount: number = 0;

	ssesionesCountStop: any = setInterval(() => {
		this.ssesionesCount++;

		if (this.ssesionesCount == 36) {
			clearInterval(this.ssesionesCountStop);
		}

	}, 250);

	daysCount: number = 0;

	daysCountStop: any = setInterval(() => {
		this.daysCount++;

		if (this.daysCount == 2) {
			clearInterval(this.daysCountStop);
		}

	}, 300);
}
