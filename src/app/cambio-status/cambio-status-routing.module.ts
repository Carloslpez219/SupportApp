import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambioStatusPage } from './cambio-status.page';

const routes: Routes = [
  {
    path: '',
    component: CambioStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambioStatusPageRoutingModule {}
