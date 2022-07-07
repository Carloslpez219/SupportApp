import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { CambioStatusPage } from '../cambio-status/cambio-status.page';
import { ComentarioPage } from '../comentario/comentario.page';
import { AgregarFallaPage } from '../agregar-falla/agregar-falla.page';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertService } from '../services/alert.service';
import { BPMService } from '../services/bpm.service';
import { ObservacionesPage } from '../observaciones/observaciones.page';

@Component({
  selector: 'app-tramite-ticket',
  templateUrl: './tramite-ticket.page.html',
  styleUrls: ['./tramite-ticket.page.scss'],
})
export class TramiteTicketPage implements OnInit {

  @Input() ticket;
  viewEntered = false;
  pasos;
  ejecucion;

  constructor( private loadingController: LoadingController, private modalController: ModalController, private sanitizer: DomSanitizer,
              private alertService: AlertService, private bpmService: BPMService){}

  async ngOnInit() {
    (await this.bpmService.listadoPasosTicket(this.ticket.codigo)).subscribe((resp: any)=>{
      console.log(resp);
      this.pasos = resp.data;
    });
    console.log(this.ticket);
  }

  async ionViewDidEnter() {
    setTimeout(async () => {
      this.viewEntered = await true;
      await this.loadingController.dismiss();
    }, 800);
  }

  ionViewWillLeave(){
    this.viewEntered = false;
  }

  async back(){
    this.modalController.dismiss();
  }

  async cambiarStatus(ticket){
    this.presentLoading();
    const modal = await this.modalController.create({
      component: CambioStatusPage,
      backdropDismiss: false,
      componentProps: { ticket }
    });
    await modal.present();

    const value: any = await modal.onDidDismiss();
    console.log(value);
    if (value.data){
      this.viewEntered = await false;
      this.ticket = await value.data;
      setTimeout(() => {
        this.viewEntered = true;
        this.loadingController.dismiss();
      }, 800);
    }else{
      this.loadingController.dismiss();
    }
  }

  async cambiarComentar(ticket){
    this.presentLoading();
    const modal = await this.modalController.create({
      component: ComentarioPage,
      backdropDismiss: false,
      componentProps: { ticket }
    });
    await modal.present();
  }

  async agregarFalla(ticket){
    this.presentLoading();
    const modal = await this.modalController.create({
      component: AgregarFallaPage,
      backdropDismiss: false,
      componentProps: { ticket }
    });
    await modal.present();

    const value: any = await modal.onDidDismiss();
    console.log(value);
    if (value.data){
      this.viewEntered = await false;
      this.ticket = await value.data;
      setTimeout(() => {
        this.viewEntered = true;
        this.loadingController.dismiss();
      }, 800);
    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    await loading.present();
  }

  async verpdf(url){
    console.log(url);
    if(url !== '' && url !== undefined){
      const safeUrl: any = await this.sanitizer.bypassSecurityTrustResourceUrl(url);
      await window.open(safeUrl.changingThisBreaksApplicationSecurity, '_system');
    }else{
      this.alertService.presentAlert('No hay archivo disponible.');
    }
  }

  async observacion(paso){
    const ticket = await this.ticket;
    const modal = await this.modalController.create({
      component: ObservacionesPage,
      backdropDismiss: false,
      componentProps: { paso, ticket }
    });
    await modal.present();
  }

  async onChange(ev, paso){
    if(paso.checked){
      this.ejecucion = 1;
    }else{
      this.ejecucion = 0;
    }
    (await this.bpmService.ejecutarPaso(this.ticket.codigo, paso.paso_codigo, paso.tipo_incidente, this.ejecucion,
      paso.observaciones)).subscribe(resp =>{
                                    console.log(resp);
                                  });
    console.log(ev);
  }


}
