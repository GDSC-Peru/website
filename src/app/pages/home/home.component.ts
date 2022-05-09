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

	speakers = [
		{
			name: 'Bezael Pérez',
			photo: './../../../assets/img/speakers/Bezael Pérez.png',
			description: 'Google Developer Expert en Angular | Co-Org NgDominican'
		},
		{
			name: 'Daniel Alexandro Lingan Caballero',
			photo: './../../../assets/img/speakers/Daniel Alexandro Lingan Caballero.png',
			description: 'Software Engineer at Globant'
		},
		{
			name: 'Dinorah Tovar',
			photo: './../../../assets/img/speakers/Dinorah Tovar.png',
			description: 'Google Developer Expert en Android'
		},
		{
			name: 'Enrique Devars',
			photo: './../../../assets/img/speakers/Enrique Devars.png',
			description: 'Frontend Developer y profesor en Platzi'
		},
		{
			name: 'José Ricardo Chavarria López',
			photo: './../../../assets/img/speakers/José Ricardo Chavarria López.png',
			description: 'Frontend Developer | Google Developer Expert en Angular | Co-Org FlutterHN'
		},
		{
			name: 'Laura Gutierrez',
			photo: './../../../assets/img/speakers/Laura Gutierrez.png',
			description: 'Data Analyst, Storyteller & Visualization Expert | Embajadora WTM'
		},
		{
			name: 'Victoria Ubaldo',
			photo: './../../../assets/img/speakers/Victoria Ubaldo.png',
			description: 'SW Engineer & Data Analyst | Co-Org WTMLima & GDG Cloud Lima'
		}
	];
	slideConfig = {
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

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
