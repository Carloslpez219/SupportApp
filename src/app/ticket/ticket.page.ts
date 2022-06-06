import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadingController, ModalController } from '@ionic/angular';
import { EditarTicketPage } from '../editar-ticket/editar-ticket.page';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.page.html',
  styleUrls: ['./ticket.page.scss'],
})
export class TicketPage implements OnInit {

  @Input() ticket;
  viewEntered = false;

  constructor( private loadingController: LoadingController, private modalController: ModalController, private sanitizer: DomSanitizer,
                private alertService: AlertService){}

  ngOnInit() {
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

  async editar(ticket){
    this.presentLoading();
    const modal = await this.modalController.create({
      component: EditarTicketPage,
      backdropDismiss: false,
      componentProps: { ticket }
    });
    await modal.present();

    const value: any = await modal.onDidDismiss();
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

}
