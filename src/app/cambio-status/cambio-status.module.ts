import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambioStatusPageRoutingModule } from './cambio-status-routing.module';

import { CambioStatusPage } from './cambio-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambioStatusPageRoutingModule
  ],
  declarations: [CambioStatusPage]
})
export class CambioStatusPageModule {}
