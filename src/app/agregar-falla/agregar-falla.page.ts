import { SerchebleSelectPage } from './../sercheble-select/sercheble-select.page';
import { Component, Input, OnInit } from '@angular/core';
import { BPMService } from '../services/bpm.service';
import { AlertService } from '../services/alert.service';
import { LoadingController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-falla',
  templateUrl: './agregar-falla.page.html',
  styleUrls: ['./agregar-falla.page.scss'],
})
export class AgregarFallaPage implements OnInit {

  @Input() ticket;
  viewEntered = false;
  descripcion = '';
  falla = '';
  hasta = this.getDate();
  maxDate: any;
  activos;
  activo;
  hora;
  situacion = 1;
  ticketNuevo: any;
  dia;
  mes;
  anio;
  hoy;
  activofound = '';

  constructor( private bpmService: BPMService, private alertService: AlertService, private loadingController: LoadingController,
    private modalController: ModalController ) { }

  async ngOnInit() {
    (await this.bpmService.getActivos()).subscribe((resp: any) =>{
      console.log(resp);
      if(resp.status){
        this.activos = resp.data;
      }else{
        this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
      }
    });
    this.hoy = this.anio + '-'+ this.mes + '-' + this.dia + 'T23:59:59';
    console.log(this.hoy);
  }

  async ionViewDidEnter() {
    this.viewEntered = true;
    await this.loadingController.dismiss();
  }

  ionViewWillLeave(){
    this.viewEntered = false;
  }

  async back(){
    this.modalController.dismiss();
  }

  async selectCategoria(){

    this.presentLoading();
    const data = this.activos;
    const modal = await this.modalController.create({
      component: SerchebleSelectPage,
      backdropDismiss: false,
      componentProps: { data }
    });
    await modal.present();

    const value: any = await modal.onDidDismiss();
    if (value.data){
      console.log(value);
      this.activo = value.data;
      this.activos.forEach(element => {
        if(element.codigo === this.activo){
          this.activofound = element.nombre;
        }
      });
    }

  }

  async cambioFechaHasta( event ){
    this.hasta = await event.detail.value.split('T');
    this.hora = await this.hasta[1];
    this.hasta = await this.hasta[0].replace('-','/');
    this.hora = await this.hora.split('-');
    this.hora = await this.hora[0];
  }

  getDate(){
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth()).padStart(2, '0');
    const yyyy = today.getFullYear();

    this.dia = String(today.getDate()).padStart(2, '0');
    this.mes = String(today.getMonth() + 1).padStart(2, '0') ;
    this.anio = today.getFullYear();
    this.maxDate = new Date(yyyy, parseInt(mm, 10), parseInt(dd, 10));
    const hoy = this.maxDate;
    return hoy;
  }

  async agregarFalla(){
    (await this.bpmService.agregarFalla(this.ticket.codigo, this.activo, this.falla, this.situacion, this.hasta, this.hora,
      this.descripcion))
      .subscribe(async (resp: any)=>{
        console.log(resp);
        if(resp.status){
          await (await this.bpmService.getTicket(this.ticket.codigo)).subscribe(async (res: any)=>{
            this.ticketNuevo = await res.data;
            this.alertService.presentToast('Falla agregada correctamente', 'success', 2500);
            this.presentLoading();
            await this.modalController.dismiss(this.ticketNuevo);
          });
        }else{
          this.alertService.presentAlert(resp.message);
        }
      });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    await loading.present();
  }

}
