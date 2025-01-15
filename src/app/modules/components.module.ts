import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from '../components/menu-bar/menu-bar.component';
import { HomeComponent } from '../pages/home/home.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
		MenuBarComponent,
		HomeComponent
  ],
	exports: [
		MenuBarComponent,
		HomeComponent
	]
})
export class ComponentsModule { }
