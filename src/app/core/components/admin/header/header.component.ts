import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {
	menu = [
		{
			label: 'Inicio',
			url: '/'
		},
		{
			label: 'Agenda',
			url: '/#/agenda'
		},
		// {
		// 	label: 'Speakers',
		// 	url: '/speakers'
		// },
		// {
		// 	label: 'Sponsors',
		// 	url: '#sponsors'
		// },
		{
			label: 'Equipo',
			url: '/#/team'
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
