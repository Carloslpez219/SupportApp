import { Component, OnInit } from '@angular/core';
import { BPMService } from '../services/bpm.service';
import { AlertService } from '../services/alert.service';
import { LoadingController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filtro-dash',
  templateUrl: './filtro-dash.page.html',
  styleUrls: ['./filtro-dash.page.scss'],
})
export class FiltroDashPage implements OnInit {

  viewEntered = false;
  desde = this.getFirstDay();
  hasta = this.getDate();
  sede = '';
  sedes;

  constructor(private bpmService: BPMService, private alertService: AlertService, private loadingController: LoadingController,
              private modalController: ModalController) { }

  getFirstDay(){
    let todayDate;
    const today = new Date();
    const yyyy = today.getFullYear();

    todayDate = '01/01/' + yyyy;
    return todayDate;
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

  cambioFecha( event ){
    const cadena = event.detail.value.substr(0,10).split('-');
    this.desde = cadena[2] + '/' + cadena[1] + '/' + cadena[0];
  }

  cambioFecha2( event ){
    const cadena = event.detail.value.substr(0,10).split('-');
    this.hasta = cadena[2] + '/' + cadena[1] + '/' + cadena[0];
  }

  async ngOnInit() {
    (await this.bpmService.getSedes()).subscribe((resp: any) =>{
      console.log(resp);
      if(resp.status){
        this.sedes = resp.data;
      }else{
        this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
      }
    });
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

  selectSede(ev){
    this.sede = ev.detail.value;
  }

  async aceptar(){

    const filtros = {
      sede : await this.sede,
      desde: await this.desde,
      hasta: await this.hasta
    };

    this.modalController.dismiss(filtros);

  }

  async dismissModal(){
    this.modalController.dismiss();
  }

}
