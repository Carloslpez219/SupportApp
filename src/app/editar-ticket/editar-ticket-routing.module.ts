import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarTicketPage } from './editar-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: EditarTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarTicketPageRoutingModule {}
