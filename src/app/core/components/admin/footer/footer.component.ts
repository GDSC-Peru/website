import { Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: [ './footer.component.scss' ]
})
export class FooterComponent {
	links = [
		{
			title: 'Acerca de',
			linkCollections: [
				{
					label: 'GDSC',
					url: 'https://gdsc.community.dev/'
				},
				{
					label: 'GDSC UNI',
					url: 'https://gdsc.community.dev/universidad-nacional-de-ingenieria/'
				},
				{
					label: 'GDSC UNICA',
					url: 'https://gdsc.community.dev/san-luis-gonzaga/'
				},
				{
					label: 'GDSC UTP',
					url: 'https://gdsc.community.dev/universidad-tecnologica-del-peru/'
				}
			]
		},
		{
			title: 'Síguenos en',
			linkCollections: [
				{
					label: 'Facebook',
					url: 'https://www.facebook.com/gdsc.peru'
				},
				{
					label: 'Twitter',
					url: 'https://twitter.com/gdsc_peru'
				},
				{
					label: 'Instagram',
					url: 'https://www.instagram.com/gdsc.peru/'
				},
				{
					label: 'Discord',
					url: 'https://discord.gg/ucEwtbuK2a'
				}
			]
		},
		{
			title: 'Recursos',
			linkCollections: [
				{
					label: 'Escríbenos',
					url: 'mailto:gdsc.peru@gmail.com'
				},
				{
					label: 'Código de conducta',
					url: 'https://about.google/community-guidelines/'
				}
				// {
				// 	label: 'Políticas de Privacidad',
				// 	url: '#'
				// },
				// {
				// 	label: 'Call for Speakers',
				// 	url: '#'
				// },
				// {
				// 	label: 'FAQs',
				// 	url: '#'
				// }
			]
		}
	];
	constructor() {}
}
