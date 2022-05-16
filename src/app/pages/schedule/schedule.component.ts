import { Component } from '@angular/core';

@Component({
	selector: 'app-schedule',
	templateUrl: './schedule.component.html',
	styleUrls: [ './schedule.component.scss' ]
})
export class ScheduleComponent {
	scheduleDayOne = [
		{
			talk: 'Nombre de la charla',
			speaker: 'Andrés Leonardo Martinez',
			photo: './../../../assets/img/speakers/Andrés Leonardo Martinez.png',
			time: '10:00 am - 11:00 am',
			description:
				'En la presentación, se describen las limitaciones actuales de la IA, introduce la ciencia de la inferencia causal y escala de causalidad, describiendo los diagramas causales y algebra causal que la representan y un modelo de inferencia causal de implementación directa. Finalmente, se presentará un caso de uso implementado en Kotlin donde se utilizan árboles de inferencia para realizar la inferencia causal en un escenario real.',
			category: 'AI'
		},
		{
			talk: 'Nombre de la charla',
			speaker: 'Dinorah Tovar',
			photo: './../../../assets/img/speakers/Dinorah Tovar.png',
			time: '11:00 am - 12:00 am',
			description:
				'En esta charla, cubriremos cómo funciona la recomposición dentro de Jetpack Compose, la nueva herramienta de interfaz de usuario para desarrolladores de Android. Repasaremos desde los conceptos básicos hasta el proceso avanzado de la recomposición. No necesita ser un experto para entender cómo funciona. - especialmente porque esta charla se centra solemnemente en cómo funciona.',
			category: 'Mobile'
		},
		{
			talk: 'Break',
			speaker: null,
			photo: null,
			time: '11:00 am - 12:00 am',
			description: null,
			category: null
		},
		{
			talk: 'Tips & buenas prácticas en Angular',
			speaker: 'Bezael Pérez',
			photo: './../../../assets/img/speakers/Bezael Pérez.png',
			time: '13:00 pm - 14:00 pm',
			description:
				'Luego de trabajar varios años con Angular, quiero compartir contigo algunos consejos y buenas prácticas en Angular.',
			category: 'Web'
		},
		{
			talk: 'El puente entre diseño y desarrollo',
			speaker: 'Cristopher Peraza',
			photo: './../../../assets/img/speakers/Cristopher Peraza.png',
			time: '14:00 pm - 15:00 pm',
			description:
				'Explicaré la importancia que tiene el saber como se implementarán tus diseños, entender cómo desarrollo interpretara tus mockups es muy importante para diseñar no sólo en el usuario final si no también pensado en la persona que hará realidad tu diseño.',
			category: 'UI/UX'
		},
		{
			talk: 'Topic Modeling en Python',
			speaker: 'Victoria Ubaldo',
			photo: './../../../assets/img/speakers/Victoria Ubaldo.png',
			time: '15:00 pm - 16:00 pm',
			description:
				'En esta sesión aprenderás a agrupar tópicos de textos usando el lenguaje de programación Python , desde la recolección de datos, el modelado y visualización de resultados usando grafos.',
			category: 'AI'
		},
		{
			talk: '¿Qué hay de nuevo viejo?: Flutter 3',
			speaker: 'Pierre Guillen',
			photo: './../../../assets/img/speakers/Pierre Guillen.png',
			time: '16:00 pm - 17:00 pm',
			description: 'Una introducción a la nueva versión del SDK de interfaces móviles de Google.',
			category: 'Mobile'
		},
		// {
		// 	talk: '',
		// 	speaker: 'Laura Gutierrez',
		// 	photo: './../../../assets/img/speakers/Laura Gutierrez.png',
		// 	time: '17:00 pm - 18:00 pm',
		// 	description: '',
		// 	category: ''
		// },
		{
			talk: 'Web Vitals',
			speaker: 'Vanessa Marely Aristizabal Angel',
			photo: './../../../assets/img/speakers/Vanessa Marely Aristizabal Angel.png',
			time: '18:00 pm - 19:00 pm',
			description:
				'Web Vitals es una iniciativa de Google, que brinda unos indicadores de calidad para mejorar la experiencia de usuario en la Web. El objetivo de la charla es hablar un poco sobre los indicadores, para conocer como podemos mejorar la experiencia de usuario, en nuestras aplicaciones Web.',
			category: 'Web'
		},
		{
			talk: 'Q&A',
			speaker: 'Leonidas Esteban',
			photo: './../../../assets/img/speakers/Leonidas Esteban.png',
			time: '19:00 pm - 20:00 pm',
			description: '',
			category: 'Web'
		}
	];

	scheduleDayTwo = [
		// {
		// 	talk: '',
		// 	speaker: 'Mirina Gonzales',
		// 	photo: './../../../assets/img/speakers/Mirina Gonzales.png',
		// 	time: '10:00 am - 11:00 am',
		// 	description: '',
		// 	category: ''
		// },
		{
			talk: '¿Como ser desarrollador de software y no morir en el intento?',
			speaker: 'Daniel Alexandro Lingan Caballero',
			photo: './../../../assets/img/speakers/Daniel Alexandro Lingan Caballero.png',
			time: '11:00 am - 12:00 am',
			description:
				'Consejos, guías, recomendaciones y todo sobre lo que debes saber al adentrarte en el mundo de la programación.',
			category: 'Software Development'
		},
		{
			talk: 'Break',
			speaker: null,
			photo: null,
			time: '11:00 am - 12:00 am',
			description: null,
			category: null
		},
		{
			talk: '',
			speaker: 'Ricardo Chavarria',
			photo: './../../../assets/img/speakers/Ricardo Chavarria.png',
			time: '13:00 pm - 14:00 pm',
			description: '',
			category: 'Web'
		},
		{
			talk: 'Blockchain Tendencias',
			speaker: 'Renato Martin De La Rosa Castillo',
			photo: './../../../assets/img/speakers/Renato Martin De La Rosa Castillo.png',
			time: '11:00 am - 12:00 am',
			description:
				'Comenzara con la breve reseña de la evolución de las cadenas de bloques, para luego sus características, ventajas y las tendencias asociadas a ella.',
			category: 'Blockchain'
		},
		{
			talk: '',
			speaker: '',
			photo: './../../../assets/img/speakers/ee.png',
			time: '',
			description: '',
			category: ''
		},
		{
			talk: 'Firebase Storage con .NET, cómo hacer esta combinación?',
			speaker: 'Christian Sánchez',
			photo: './../../../assets/img/speakers/Christian Sánchez.png',
			time: '11:00 am - 12:00 am',
			description:
				'Más del 90% de proyectos de software usan imágenes, es por ello que está charla aprenderemos a subir archivos y otro contenido a Firebase Storage usando la tecnología .NET',
			category: 'Web'
		},
		{
			talk: '5 cosas que no te dicen en la universidad sobre ser Software Engineer',
			speaker: 'Enrique Devars',
			photo: './../../../assets/img/speakers/Enrique Devars.png',
			time: '11:00 am - 12:00 am',
			description:
				'Cuando iniciamos nuestras carreras profesionales creemos que el ser Software Engineers representa escribir el mejor sistema que exista, pero esto no es así. En esta charla te compartiré 5 cosas que han marcado la diferencia en mi carrera profesional para ser un mejor Software Engineer. ',
			category: 'Software Development'
		},
		{
			talk: 'OKR: creando equipos altamente competitivos',
			speaker: 'Niel Ugarte',
			photo: './../../../assets/img/speakers/Niel Ugarte.png',
			time: '11:00 am - 12:00 am',
			description:
				'Es un modelo de gestión que permite simplificar la creación de objetivos y su medición, haciendo más factible y práctico su alcance. Resuelve el común de los problemas: cómo alinear equipos y comprometerse con las prioridades de tu organización. ',
			category: 'Gestión de proyectos'
		},
		{
			talk: 'Design OPS with Dev OPS',
			speaker: 'Michael Dorka',
			photo: './../../../assets/img/speakers/Michael Dorka.png',
			time: '19:00 pm - 20:00 pm',
			description:
				'Hablo de porque es importante que Dev Ops entienden como trabajan Diseñadores y como trabajar en conjuntos.',
			category: 'Software Development'
		}
	];

	dayActive = 0;
}
