import { Component, Input, OnInit } from '@angular/core';
import { BPMService } from '../services/bpm.service';
import { AlertService } from '../services/alert.service';
import { LoadingController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cambio-status',
  templateUrl: './cambio-status.page.html',
  styleUrls: ['./cambio-status.page.scss'],
})
export class CambioStatusPage implements OnInit {

  @Input() ticket;
  status;
  estado;
  viewEntered = false;
  descripcion = '';
  ticketNuevo: any;
  estadoActual = '';

  constructor(private bpmService: BPMService, private alertService: AlertService, private loadingController: LoadingController,
    private modalController: ModalController) { }

  async ngOnInit() {
    console.log(this.ticket);
    (await this.bpmService.getStatus(this.ticket.codigo)).subscribe(async (resp: any) =>{
      console.log(resp);
      if(resp.status){
        this.status = await resp.data;
        this.estadoActual = await this.ticket.estatus_codigo;
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
    this.estado = ev.detail.value;
  }

  async cambiosStatus(){
    (await this.bpmService.cambiarStatus(this.descripcion, this.ticket.codigo, this.estado))
      .subscribe(async (resp: any)=>{
        console.log(resp);
        if(resp.status){
          await (await this.bpmService.getTicket(resp.data.ticket_codigo)).subscribe(async (res: any)=>{
            this.ticketNuevo = await res.data;
            await this.alertService.presentToast('El ticket se ha actualizado correctamente', 'success', 2500);
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
