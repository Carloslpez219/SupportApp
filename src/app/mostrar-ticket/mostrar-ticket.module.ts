import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarTicketPageRoutingModule } from './mostrar-ticket-routing.module';

import { MostrarTicketPage } from './mostrar-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarTicketPageRoutingModule
  ],
  declarations: [MostrarTicketPage]
})
export class MostrarTicketPageModule {}
