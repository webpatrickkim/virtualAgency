import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExternalPagesModule } from '../external-pages/external-pages.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ExternalPagesModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  exports:[ HeaderComponent, FooterComponent]
})
export class UiModule { }
