import { AlertService } from 'src/app/services/alert.service';
import { ModalController, LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Device } from '@awesome-cordova-plugins/device/ngx';
import { Clipboard } from '@awesome-cordova-plugins/clipboard/ngx';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

@Component({
  selector: 'app-uid',
  templateUrl: './uid.page.html',
  styleUrls: ['./uid.page.scss'],
})
export class UidPage implements OnInit {

  viewEntered = false;
  mostrarUUID = false;
  uuid = '';

  constructor(private modalController: ModalController, private loadingController: LoadingController, private device: Device,
              private clipboard: Clipboard, private alertService: AlertService, private socialSharing: SocialSharing) { }

  ngOnInit() {
    this.uuid = this.device.uuid;
    setTimeout(() => {
      console.log(this.uuid);
      this.mostrarUUID = true;
    }, 500);
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

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    await loading.present();
  }

  copy(){
    this.clipboard.copy(this.uuid);
    this.alertService.presentToast('Código copiado en el portapapeles', 'dark', 2000);
  }

  whatsapp(){
    this.socialSharing.shareViaWhatsApp('UUID compartido: ' + this.uuid);
  }

}
