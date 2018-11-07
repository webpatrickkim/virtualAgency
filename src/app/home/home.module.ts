import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UiModule } from '../ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    UiModule
  ],
  declarations: [HomeComponent],
  exports:[HomeComponent]
})
export class HomeModule { }
