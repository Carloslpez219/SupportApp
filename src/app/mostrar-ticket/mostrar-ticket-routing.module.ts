import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarTicketPage } from './mostrar-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarTicketPageRoutingModule {}
