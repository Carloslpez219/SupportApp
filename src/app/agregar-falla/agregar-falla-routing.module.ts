import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarFallaPage } from './agregar-falla.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarFallaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarFallaPageRoutingModule {}
