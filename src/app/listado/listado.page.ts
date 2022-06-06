import { Component, Input, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { BPMService } from '../services/bpm.service';
import { AlertService } from '../services/alert.service';
import { TicketPage } from '../ticket/ticket.page';
import { MostrarTicketPage } from '../mostrar-ticket/mostrar-ticket.page';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  @Input() listadoPorStatus;
  recharge;
  viewEntered = false;

  constructor( private modalController: ModalController, private loadingController: LoadingController, private bpmService: BPMService,
               private alertService: AlertService) { }

  ngOnInit() {
    console.log(this.listadoPorStatus);
  }

  async ionViewDidEnter() {

    this.listadoPorStatus.forEach(element => {
      if(element.situacion === 'Vencido'){
        element.color = 'background: #FADBD8';
      }else if(element.situacion === 'Cerrado'){
        element.color = 'background: #D6DBDF';
      }else if(element.situacion === 'Cancelado'){
      element.color = 'background: #D6EAF8';
      }else{
        element.color = 'background: #D5F5E3';
      }
    });

    this.viewEntered = true;
    await this.loadingController.dismiss();
  }

  ionViewWillLeave(){
    this.viewEntered = false;
  }

  async back(){
    this.recharge = false;
    this.modalController.dismiss(this.recharge);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    await loading.present();
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
      component: MostrarTicketPage,
      backdropDismiss: false,
      componentProps: { ticket }
    });
    await modal.present();
  }


}
