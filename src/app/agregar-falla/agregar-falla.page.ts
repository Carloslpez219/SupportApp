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

  constructor( private bpmService: BPMService, private alertService: AlertService, private loadingController: LoadingController,
    private modalController: ModalController ) { }

  async ngOnInit() {
    (await this.bpmService.getStatus(this.ticket.codigo)).subscribe((resp: any) =>{
      console.log(resp);
      if(resp.status){
        this.activos = resp.data;
      }else{
        this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
      }
    });
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

  selectCategoria(ev){
    this.activo = ev.detail.value;
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
