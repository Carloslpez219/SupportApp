import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { EditarTicketPage } from '../editar-ticket/editar-ticket.page';

@Component({
  selector: 'app-mostrar-ticket',
  templateUrl: './mostrar-ticket.page.html',
  styleUrls: ['./mostrar-ticket.page.scss'],
})
export class MostrarTicketPage implements OnInit {

  @Input() ticket;
  viewEntered = false;

  constructor( private loadingController: LoadingController, private modalController: ModalController){}

  ngOnInit() {
    console.log(this.ticket);
  }

  async ionViewDidEnter() {
    setTimeout(async () => {
      this.viewEntered = true;
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
    const modal = await this.modalController.create({
      component: EditarTicketPage,
      backdropDismiss: false,
      componentProps: { ticket }
    });
    await modal.present();
  }

}
