import { UidPage } from './../uid/uid.page';
import { NavController, ModalController, LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-token',
  templateUrl: './token.page.html',
  styleUrls: ['./token.page.scss'],
})
export class TokenPage implements OnInit {

  constructor( private navCtrl: NavController, private modalController: ModalController, private loadingController: LoadingController) { }

  ngOnInit() {
  }

  back(){
    this.navCtrl.back({animated: true});
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    await loading.present();
  }


  async uid(){
    this.presentLoading();
    const modal = await this.modalController.create({
      component: UidPage,
      backdropDismiss: false
    });
    await modal.present();
  }

}
