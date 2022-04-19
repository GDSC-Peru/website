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
					url: '#'
				},
				{
					label: 'GDSC UNI',
					url: '#'
				},
				{
					label: 'GDSC UNICA',
					url: '#'
				},
				{
					label: 'GDSC UTP',
					url: '#'
				}
			]
		},
		{
			title: 'Síguenos en',
			linkCollections: [
				{
					label: 'Facebook',
					url: '#'
				},
				{
					label: 'Twitter',
					url: '#'
				},
				{
					label: 'Instagram',
					url: '#'
				},
				{
					label: 'Discord',
					url: '#'
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
					url: '#'
				},
				{
					label: 'Políticas de Privacidad',
					url: '#'
				},
				{
					label: 'Call for Speakers',
					url: '#'
				},
				{
					label: 'FAQs',
					url: '#'
				}
			]
		}
	];
	constructor() {}
}
