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
			name: 'Andrés Leonardo Martinez',
			photo: './../../../assets/img/speakers/Andrés Leonardo Martinez.png',
			description:
				'Miembro del equipo de Ingeniería de Google, líder del programa Google Cloud Ecosystem en Europa, con sede en Zúrich. También es miembro de IEE , ACM , LINUX , Foundation y Computer Society.'
		},
		{
			name: 'Dinorah Tovar',
			photo: './../../../assets/img/speakers/Dinorah Tovar.png',
			description:
				' Ingeniera de Plataforma Móvil en Konfio, En el pasado, dirigió los equipos de ingeniería móvil de Lonely Planet y el Boston Consulting Group. Google Developer Expert en Android'
		},
		{
			name: 'Bezael Pérez',
			photo: './../../../assets/img/speakers/Bezael Pérez.png',
			description:
				'Google Developer Expert en Angular | Co-Org NgDominican. Está en el mundo del desarrollo web, realizando aplicaciones en HTML, CSS, JavaScript & Angular. En el Backend, ha realizado proyectos con Node.js.'
		},
		{
			name: 'Cristopher Peraza',
			photo: './../../../assets/img/speakers/Cristopher Peraza.png',
			description:
				'UX/UI Designer con más de 4 años de experiencia profesional, creador de contenido y apasionado por compartir conocimiento.'
		},
		{
			name: 'Victoria Ubaldo',
			photo: './../../../assets/img/speakers/Victoria Ubaldo.png',
			description:
				'Data Analyst en Labentana Innovation Lab - Interbank. Ingeniera de Sistemas. Además es Women Techmakers Ambassador y co-Org de GDG Cloud Lima. Pasión por la innovación y desarrollar soluciones con código y ML.'
		},
		{
			name: 'Niel Ugarte',
			photo: './../../../assets/img/speakers/Niel Ugarte.png',
			description:
				'Gerente General en Agile Code, Gerente de Desarrollo y Proyecto en DOAPPS. e Ingeniero de Software de UNMSM.'
		},
		{
			name: 'Laura Gutiérrez',
			photo: './../../../assets/img/speakers/Laura Gutierrez.png',
			description:
				'Analista y Estratega de Datos con 6 años de experiencia aplicando la ciencia de datos en Desarrollo de Productos Digitales, Marketing Digital y Recursos Humanos. Además es embajadora de Women Techmakers y Women in Data Science.'
		},
		{
			name: 'Vanessa Marely Aristizabal Angel',
			photo: './../../../assets/img/speakers/Vanessa Marely Aristizabal Angel.png',
			description:
				'Frontend Developer. GDE en Angular & Web Technologies. WTM Ambassador de Medellin. GitHub Star.'
		},
		{
			name: 'Leonidas Esteban',
			photo: './../../../assets/img/speakers/Leonidas Esteban.png',
			description: 'Engineer Manager at Parrot + Teacher at www.LeonidasEsteban.com & Google Developer Expert.'
		},
		{
			name: 'Mirina Gonzales',
			photo: './../../../assets/img/speakers/Mirina Gonzales.png',
			description:
				'Ingeniería de Sistemas. Actualmente es embajadora de Women Techmakers. Certificada como AWS Solution Architect-Associate. Actualmente se desempeña como data engineer en Global66.'
		},
		{
			name: 'Daniel Alexandro Lingan Caballero',
			photo: './../../../assets/img/speakers/Daniel Alexandro Lingan Caballero.png',
			description:
				' Ingeniero de Sistemas con más de 4 años de experiencia en análisis, diseño, desarrollo e implementación de proyectos de software en diferentes sectores tales como: Banca, Industria, Retail, Consultoría entre otros. Actualmente trabaja como software engineer en Globant.'
		},
		{
			name: 'Ricardo Chavarria',
			photo: './../../../assets/img/speakers/Ricardo Chavarria.png',
			description:
				'Ingeniero de software que trabaja actualmente como ingeniero de Angular para DevIntent, es Google Developer Expert en Angular y Auth0 Ambassador.'
		},
		{
			name: 'Renato Martin De La Rosa Castillo',
			photo: './../../../assets/img/speakers/Renato Martin De La Rosa Castillo.png',
			description:
				'Ingeniero de Sistemas y poseé un Magister en Inteligencia Artificial. Cuenta con 14 años de experiencia trabajando, para empresas del sector publico y privado, como Desarrollador, Analista Funcional y Líder Técnico.'
		},
		{
			name: 'Andrés Villanueva',
			photo: './../../../assets/img/speakers/Andrés Villanueva.png',
			description:
				'Andrés es Google Developer Expert en Firebase & Angular. Además es Software Engineer en Herodevs.'
		},
		{
			name: 'Christian Sánchez',
			photo: './../../../assets/img/speakers/Christian Sánchez.png',
			description:
				'Ingeniero de Software. Christian es Auth0 Ambassador y Postman Supernova, también apasionado por las comunidades, Co-Fundador de la comunidad DevTeam504, Co-Organizador de la comunidad Flutter en Honduras y Líder en Google DSC UNAH-VS.'
		},
		{
			name: 'Enrique Devars',
			photo: './../../../assets/img/speakers/Enrique Devars.png',
			description: 'Front-end Developer y profesor en Platzi.'
		},
		{
			name: 'Pierre Guillen',
			photo: './../../../assets/img/speakers/Pierre Guillen.png',
			description:
				'Mobile Software Engineer in Bitsports, Flutter Developer y Organizer of hacker_dome & FlutterPeru'
		},
		{
			name: 'Michael Dorka',
			photo: './../../../assets/img/speakers/Michael Dorka.png',
			description:
				'Cuenta con más de 20 años traduciendo las necesidades de negocios a diseño y creando oportunidades comerciales a través de la investigación de usuarios.'
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
