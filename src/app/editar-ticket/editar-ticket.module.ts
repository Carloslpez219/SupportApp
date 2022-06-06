import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarTicketPageRoutingModule } from './editar-ticket-routing.module';

import { EditarTicketPage } from './editar-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarTicketPageRoutingModule
  ],
  declarations: [EditarTicketPage]
})
export class EditarTicketPageModule {}
