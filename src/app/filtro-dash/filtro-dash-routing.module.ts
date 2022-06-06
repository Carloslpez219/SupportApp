import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiltroDashPage } from './filtro-dash.page';

const routes: Routes = [
  {
    path: '',
    component: FiltroDashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiltroDashPageRoutingModule {}
