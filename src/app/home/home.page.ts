import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { BPMService } from '../services/bpm.service';
import { AlertService } from '../services/alert.service';
import { ListadoPage } from '../listado/listado.page';
import { TicketPage } from '../ticket/ticket.page';
import { TramiteTicketPage } from '../tramite-ticket/tramite-ticket.page';
import { FiltrosPage } from '../filtros/filtros.page';
import { FiltroDashPage } from '../filtro-dash/filtro-dash.page';
import { Device } from '@awesome-cordova-plugins/device/ngx';
import { UserService } from '../Services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  conteoTickets;
  //Filtro conteo
  fini = '';
  ffin = '';
  sede = '';
  //
  cardSkeleton = true;
  skeletonScreen = Array(9);
  //
  asignados = true;
  mis = false;
  dash = false;
  //Filtro Asignados
  finiC = '';
  ffinA = '';
  status = '';
  categoria = '';
  incidentes = '';
  prioridad = '';
  ticketsAsignados;
  mostrar = false;
  //Filtro Mis
  misTickets;
  mostrarM = false;

  constructor( private navController: NavController, private storage: Storage, private bpmService: BPMService,
                private alertService: AlertService, private modalController: ModalController,
                public loadingController: LoadingController, private device: Device, private userService: UserService) {}

  ngOnInit() {
    this.getTicketsAsignados();
  }

  async doRefreshAsig(event){
    this.mostrar = false;
    this.getTicketsAsignados().then(() => {
      event.target.complete();
    });
  }

  async doRefreshMis(event){
    this.mostrarM = false;
    this.getMisTickets().then(() => {
      event.target.complete();
    });
  }

  async doRefreshDash(event){
    this.cardSkeleton = false;
    this.getConteoTickets().then(() => {
      event.target.complete();
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    await loading.present();
  }

  async getConteoTickets<T>(){
    this.cardSkeleton = true;
      (await this.bpmService.conteoTickets(this.fini, this.ffin, this.sede)).subscribe((resp: any) =>{
        if(resp.status){
          this.conteoTickets = resp.data;
          console.log(resp);
          setTimeout(() => {
            this.conteoTickets.forEach(element => {
              element.color = 'background: '+ element.color;
            });
            this.cardSkeleton = false;
          }, 500);
        }else{
          this.alertService.presentAlert(resp.data.msg);
        }
      });
    }

  async logOut(){
    this.userService.unregister(this.device.uuid);
    this.navController.navigateRoot('/login');
    this.storage.clear();
  }

  getDate(){
    let todayDate;
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    todayDate = dd + '/' + mm + '/' + yyyy;
    return todayDate;
  }

  getHour(){
    const hoy = new Date();
    const hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
    return hora;
  }

  async getListadoPorStatus(status){
    await this.presentLoading();
    (await this.bpmService.listadoTickets(status, this.finiC, this.ffinA, this.sede)).subscribe((resp: any) =>{
      if(resp.status){
        const listadoPorStatus = resp.data;
        this.presentModalListado(listadoPorStatus);
      }else{
        this.loadingController.dismiss();
        this.alertService.presentAlert(resp.data.msg);
      }
    });
  }

  async presentModalListado(listadoPorStatus){
    const modal = await this.modalController.create({
      component: ListadoPage,
      backdropDismiss: false,
      componentProps: { listadoPorStatus }
    });
    await modal.present();
  }

  async segmentChanged(ev){
    if(ev.detail.value === 'mis tickets'){
      this.mostrarM = await false;
      this.mis = true;
      this.asignados = false;
      this.dash = false;
      this.getMisTickets();
    }else if(ev.detail.value === 'dashboard'){
      this.cardSkeleton = await false;
      this.mis = false;
      this.asignados = false;
      this.dash = true;
      this.getConteoTickets();
    }else{
      this.mostrar = await false;
      this.mis = false;
      this.asignados = true;
      this.dash = false;
      this.getTicketsAsignados();
    }
  }

  async getTicketsAsignados(){
    // eslint-disable-next-line max-len
    await (await this.bpmService.getTicketsAsignados(this.status, this.finiC, this.ffinA, this.prioridad, this.incidentes, this.categoria)).subscribe(async (resp: any) =>{
      if(resp.status){
        console.log(resp);
        this.ticketsAsignados = resp.data;
        setTimeout(async () => {
          this.mostrar = await true;
        }, 500);
      }else{
        this.alertService.presentAlert(resp.data.msg);
      }
    });
  }

  async getMisTickets(){
    // eslint-disable-next-line max-len
    await (await this.bpmService.getMisTickets(this.status, this.finiC, this.ffinA, this.prioridad, this.incidentes, this.categoria)).subscribe((resp: any) =>{
      if(resp.status){
        console.log(resp);
        this.misTickets = resp.data;
        setTimeout(async () => {
          this.mostrarM = await true;
        }, 500);
      }else{
        this.alertService.presentAlert( resp.data.msg);
      }
    });
  }

  async getTicket(codigo){
    await this.presentLoading();
    (await this.bpmService.getTicket(codigo)).subscribe((resp: any) =>{
      if(resp.status){
        const ticket = resp.data;
        this.presentModalTicket(ticket);
      }else{
        this.loadingController.dismiss();
        this.alertService.presentAlert('Ha ocurrido un error, intente de nuevo más tarde.');
      }
    });
  }

  async presentModalTicket(ticket){
    const modal = await this.modalController.create({
      component: TramiteTicketPage,
      backdropDismiss: false,
      componentProps: { ticket }
    });
    await modal.present();
  }

  async getMisTicket(codigo){
    await this.presentLoading();
    (await this.bpmService.getTicket(codigo)).subscribe((resp: any) =>{
      if(resp.status){
        const ticket = resp.data;
        this.presentModalTicketPage(ticket);
      }else{
        this.loadingController.dismiss();
        this.alertService.presentAlert('Ha ocurrido un error, intente de nuevo más tarde.');
      }
    });
  }

  async presentModalTicketPage(ticket){
    const modal = await this.modalController.create({
      component: TicketPage,
      backdropDismiss: false,
      componentProps: { ticket }
    });
    await modal.present();
  }


  async presentModalFiltros(){
    await this.presentLoading();
    const modal = await this.modalController.create({
      component: FiltrosPage,
      backdropDismiss: false
    });
    await modal.present();

    const value: any = await modal.onDidDismiss();
    console.log(value);
    if (value.data){
      this.status = await value.data.estado;
      this.categoria = await value.data.categoria;
      this.incidentes = await value.data.incidente;
      this.prioridad = await value.data.prioridad;
      this.finiC = await value.data.desde;
      this.ffinA = await value.data.hasta;

      if(this.asignados){
        await this.getTicketsAsignados();
        this.status = await '';
        this.categoria = await '';
        this.incidentes = await '';
        this.prioridad = await '';
        this.finiC = await '';
        this.ffinA = await '';
      }else if(this.mis){
        this.getMisTickets();
        this.status = await '';
        this.categoria = await '';
        this.incidentes = await '';
        this.prioridad = await '';
        this.finiC = await '';
        this.ffinA = await '';
      }
    }
  }

  async presentModalFiltrosDash(){
    await this.presentLoading();
    const modal = await this.modalController.create({
      component: FiltroDashPage,
      backdropDismiss: false
    });
    await modal.present();

    const value: any = await modal.onDidDismiss();
    console.log(value);
    if (value.data){
      this.fini = await value.data.desde;
      this.ffin = await value.data.hasta;
      this.sede = await value.data.sede;

      await this.getConteoTickets();

      this.fini = await '';
      this.ffin = await '';
      this.sede = await '';

    }
  }

}
