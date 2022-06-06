import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { BPMService } from '../services/bpm.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.page.html',
  styleUrls: ['./nuevo.page.scss'],
})
export class NuevoPage implements OnInit {

  sedes;
  sectores;
  areas;
  categorias;
  prioridades;
  incidentes;
  //
  sede;
  sector;
  area;
  categoria;
  prioridad;
  incidente;
  descripcion = '';
  selectedFile;
  ticketCodigo;

  constructor(private navCtrl: NavController, private bpmService: BPMService, private alertService: AlertService,
              private loadingController: LoadingController) { }

  async ngOnInit() {
    (await this.bpmService.getSedes()).subscribe((resp: any) =>{
      if(resp.status){
        this.sedes = resp.data;
      }else{
        this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
      }
    });
    (await this.bpmService.getCategorias()).subscribe((resp: any) =>{
      if(resp.status){
        this.categorias = resp.data;
      }else{
        this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
      }
    });
    (await this.bpmService.getIncidentes()).subscribe((resp: any) =>{
      if(resp.status){
        this.incidentes = resp.data;
      }else{
        this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
      }
    });
    (await this.bpmService.getPrioridades()).subscribe((resp: any) =>{
      if(resp.status){
        this.prioridades = resp.data;
      }else{
        this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
      }
    });
    (await this.bpmService.getSectores()).subscribe((resp: any) =>{
      if(resp.status){
        this.sectores = resp.data;
      }else{
        this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
      }
    });
    (await this.bpmService.getAreas(this.sede)).subscribe((resp: any) =>{
      console.log(resp);
      if(resp.status){
        this.areas = resp.data;
      }else{
        this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
      }
    });
  }

  back(){
    this.navCtrl.back({animated: true});
  }

  selectCategoria(ev){
    this.categoria = ev.detail.value;
  }

  selectArea(ev){
    this.area = ev.detail.value;
  }

  selectIncidente(ev){
    this.incidente = ev.detail.value;
  }

  selectSede(ev){
    this.sede = ev.detail.value;
  }

  selectSector(ev){
    this.sector = ev.detail.value;
  }

  selectPrioridad(ev){
    this.prioridad = ev.detail.value;
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    await loading.present();
  }

  async guardarTicket(){
    this.presentLoading();
    (await this.bpmService.guardarTicket(this.descripcion, this.incidente, this.prioridad, this.sede, this.sector, this.area))
    .subscribe(async (resp: any) =>{
      console.log(resp);
      if(resp.status){
        this.ticketCodigo = await  resp.data.ticket_codigo;
        await this.post();
        await this.alertService.presentToast('El ticket ha sigo generado con éxito.', 'success', 2500);
        this.loadingController.dismiss();
        this.navCtrl.back();
      }else{
        this.alertService.presentAlert(resp.message);
      }
    });
  }

  onFileSelected(ev){
    console.log(ev);
    this.selectedFile = ev.target.files[0];
  }

  async post(){
    (await this.bpmService.post(this.ticketCodigo, 1, this.selectedFile, this.descripcion)).subscribe((resp: any) =>{
      console.log(resp);
    });
  }


}
