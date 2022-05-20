import { Component } from '@angular/core';

@Component({
	selector: 'app-team',
	templateUrl: './team.component.html',
	styleUrls: [ './team.component.scss' ]
})
export class TeamComponent {
	leads = [
		{
			name: 'Carlos Garay',
			description: 'GDSC Lead Universidad Nacional de Ingeniería.'
		},
		{
			name: 'Luis Perez',
			description: 'Frontend Developer. GDSC Lead Universidad Tecnológica del Perú.'
		},
		{
			name: 'Eduardo Ormeño',
			description: 'GDSC Lead Universidad San Luis Gonzaga.'
		}
	];
	team = [
		{
			name: 'Abel Guerra',
			description: 'Core Team Universidad Tecnológica del Perú'
		},
		{
			name: 'Angy Benavides',
			description: 'Core Team Universidad Tecnológica del Perú'
		},
		{
			name: 'Carlos Huarcaya',
			description: 'Core Team Universidad San Luis Gonzaga'
		},
		{
			name: 'Fiorella Arias',
			description: 'Core Team Universidad San Luis Gonzaga'
		},
		{
			name: 'Gengis Gutierrez',
			description: 'Core Team Universidad Nacional de Ingeniería'
		},
		{
			name: 'Gianella Belleza',
			description: 'Core Team Universidad Nacional de Ingeniería'
		},
		{
			name: 'Henry Nieto',
			description: 'Core Team Universidad Nacional de Ingeniería'
		},
		{
			name: 'Himbler Capcha',
			description: 'Core Team Universidad Nacional de Ingeniería'
		},
		{
			name: 'Jhosep Dominguez',
			description: 'Core Team Universidad Tecnológica del Perú'
		},
		{
			name: 'Jose Alejo',
			description: 'Core Team Universidad San Luis Gonzaga'
		},
		{
			name: 'Jose Guerra',
			description: 'Core Team Universidad Nacional de Ingeniería'
		},
		{
			name: 'Kevin Zárate',
			description: 'Core Team Universidad Nacional de Ingeniería'
		},
		{
			name: 'Leonardo Rueda',
			description: 'Core Team Universidad Tecnológica del Perú'
		},
		{
			name: 'Luis Oyolo',
			description: 'Core Team Universidad San Luis Gonzaga'
		},
		{
			name: 'Nolverth Huaman',
			description: 'Core Team Universidad Tecnológica del Perú'
		},
		{
			name: 'Pablo Ramos',
			description: 'Core Team Universidad San Luis Gonzaga'
		},
		{
			name: 'Ruben Peralta',
			description: 'Core Team Universidad San Luis Gonzaga'
		},
		{
			name: 'Sheila Nadine',
			description: 'Core Team Universidad San Luis Gonzaga'
		},
		{
			name: 'Sonia Condori',
			description: 'Core Team Universidad San Luis Gonzaga'
		}
	];
}
