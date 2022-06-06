import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltroDashPageRoutingModule } from './filtro-dash-routing.module';

import { FiltroDashPage } from './filtro-dash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltroDashPageRoutingModule
  ],
  declarations: [FiltroDashPage]
})
export class FiltroDashPageModule {}
