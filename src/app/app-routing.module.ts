import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './guards/guard.guard';

const routes: Routes = [
  {
    canActivate: [GuardGuard],
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'signaturepad',
    loadChildren: () => import('./signaturepad/signaturepad.module').then( m => m.SignaturepadPageModule)
  },
  {
    path: 'listado',
    loadChildren: () => import('./listado/listado.module').then( m => m.ListadoPageModule)
  },
  {
    path: 'ticket',
    loadChildren: () => import('./ticket/ticket.module').then( m => m.TicketPageModule)
  },
  {
    path: 'tramite-ticket',
    loadChildren: () => import('./tramite-ticket/tramite-ticket.module').then( m => m.TramiteTicketPageModule)
  },
  {
    path: 'nuevo',
    loadChildren: () => import('./nuevo/nuevo.module').then( m => m.NuevoPageModule)
  },
  {
    path: 'editar-ticket',
    loadChildren: () => import('./editar-ticket/editar-ticket.module').then( m => m.EditarTicketPageModule)
  },
  {
    path: 'mostrar-ticket',
    loadChildren: () => import('./mostrar-ticket/mostrar-ticket.module').then( m => m.MostrarTicketPageModule)
  },
  {
    path: 'cambio-status',
    loadChildren: () => import('./cambio-status/cambio-status.module').then( m => m.CambioStatusPageModule)
  },
  {
    path: 'comentario',
    loadChildren: () => import('./comentario/comentario.module').then( m => m.ComentarioPageModule)
  },
  {
    path: 'agregar-falla',
    loadChildren: () => import('./agregar-falla/agregar-falla.module').then( m => m.AgregarFallaPageModule)
  },
  {
    path: 'filtros',
    loadChildren: () => import('./filtros/filtros.module').then( m => m.FiltrosPageModule)
  },
  {
    path: 'filtro-dash',
    loadChildren: () => import('./filtro-dash/filtro-dash.module').then( m => m.FiltroDashPageModule)
  },  {
    path: 'notificaciones',
    loadChildren: () => import('./notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },
  {
    path: 'observaciones',
    loadChildren: () => import('./observaciones/observaciones.module').then( m => m.ObservacionesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
