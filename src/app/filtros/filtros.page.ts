import { Component, OnInit } from '@angular/core';
import { BPMService } from '../services/bpm.service';
import { AlertService } from '../services/alert.service';
import { LoadingController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.page.html',
  styleUrls: ['./filtros.page.scss'],
})
export class FiltrosPage implements OnInit {

  viewEntered = false;
  //
  status;
  categorias;
  prioridades;
  incidentes;
  //
  estdo= '';
  categoria= '';
  prioridad= '';
  incidente= '';
  desde = this.getDate();
  hasta = this.getDate();

  constructor( private bpmService: BPMService, private alertService: AlertService, private loadingController: LoadingController,
    private modalController: ModalController) { }

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
    (await this.bpmService.getStatus()).subscribe((resp: any) =>{
      console.log(resp);
      if(resp.status){
        this.status = resp.data;
      }else{
        this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
      }
    });
    (await this.bpmService.getCategorias()).subscribe((resp: any) =>{
      console.log(resp);
      if(resp.status){
        this.categorias = resp.data;
      }else{
        this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
      }
    });
    (await this.bpmService.getIncidentes()).subscribe((resp: any) =>{
      console.log(resp);
      if(resp.status){
        this.incidentes = resp.data;
      }else{
        this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
      }
    });
    (await this.bpmService.getPrioridades()).subscribe((resp: any) =>{
      console.log(resp);
      if(resp.status){
        this.prioridades = resp.data;
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

  selectCategoria(ev){
    this.categoria = ev.detail.value;
  }

  selectIncidente(ev){
    this.incidente = ev.detail.value;
  }

  selectStatus(ev){
    this.estdo = ev.detail.value;
  }

  selectPrioridad(ev){
    this.prioridad = ev.detail.value;
  }

  async dismissModal(){
    this.modalController.dismiss();
  }

  async aceptar(){

    const filtros = {
      estado : await this.estdo,
      categoria: await this.categoria,
      prioridad: await this.prioridad,
      incidente: await this.incidente,
      desde: await this.desde,
      hasta: await this.hasta
    };

    this.modalController.dismiss(filtros);

  }

}
