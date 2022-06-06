import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarFallaPageRoutingModule } from './agregar-falla-routing.module';

import { AgregarFallaPage } from './agregar-falla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarFallaPageRoutingModule
  ],
  declarations: [AgregarFallaPage]
})
export class AgregarFallaPageModule {}
