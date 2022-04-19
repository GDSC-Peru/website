import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './../core/core.module';

const PAGES = [HomeComponent];


@NgModule({
  declarations: [...PAGES],
  imports: [
  CommonModule,
    CoreModule
  ]
})
export class PagesModule { }
