import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {
	menu = [
		{
			label: 'Agenda',
			url: '/agenda'
		},
		{
			label: 'Speakers',
			url: '/speakers'
		},
		{
			label: 'Sponsors',
			url: '#sponsors'
		},
		{
			label: 'Equipo',
			url: '/equipo'
		},
		{
			label: 'Código de conducta',
			url: '#code'
		},
		{
			label: 'Contacto',
			url: 'mailto:gdsc.peru@gmail.com'
		}
	];
	constructor() {}
}
