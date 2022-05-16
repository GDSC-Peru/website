import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from './components/admin/footer/footer.component';
import { HeaderComponent } from './components/admin/header/header.component';
import { TalkCategoryComponent } from './components/admin/talk-category/talk-category.component';

const CORE_COMPONENTS = [ HeaderComponent, FooterComponent, TalkCategoryComponent ];
const CORE_MODULES = [ CommonModule, SharedModule ];

@NgModule({
	declarations: [ ...CORE_COMPONENTS ],
	imports: [ ...CORE_MODULES ],
	exports: [ ...CORE_MODULES, ...CORE_COMPONENTS ]
})
export class CoreModule {}
