import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-talk-category',
	templateUrl: './talk-category.component.html',
	styleUrls: [ './talk-category.component.scss' ]
})
export class TalkCategoryComponent {
	constructor() {}
	@Input() type: string;
}
