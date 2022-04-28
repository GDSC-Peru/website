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
}
