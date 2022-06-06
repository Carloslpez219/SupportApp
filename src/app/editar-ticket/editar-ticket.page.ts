import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { BPMService } from '../services/bpm.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-editar-ticket',
  templateUrl: './editar-ticket.page.html',
  styleUrls: ['./editar-ticket.page.scss'],
})
export class EditarTicketPage implements OnInit {

  @Input() ticket;
  viewEntered = false;

  sedes;
  sectores;
  areas;
  categorias;
  prioridades;
  incidentes;
  //
  sede;
  sector;
  area =  '1';
  categoria;
  prioridad;
  incidente;
  descripcion = '';
  ticketNuevo: any;
  selectedFile;
  status;
  estado;
  estadoActual = '';
  prioridadActual = '';
  sectorActual = '';
  sedeActual = '';
  incidenteActual = '';
  areaActual = '';
  categoriaActual = '';

  constructor(private loadingController: LoadingController, private modalController: ModalController, private bpmService: BPMService,
              private alertService: AlertService) { }

  async ngOnInit() {
    (await this.bpmService.getSedes()).subscribe(async (resp: any) =>{
      console.log(resp);
      if(resp.status){
        this.sedes = await resp.data;
        this.sedeActual = await this.ticket.sede_codigo;
      }else{
        this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
      }
    });
    (await this.bpmService.getCategorias()).subscribe(async (resp: any) =>{
      console.log(resp);
      if(resp.status){
        this.categorias = await resp.data;
        this.categoriaActual = await this.ticket.categoria_codigo;
      }else{
        this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
      }
    });
    (await this.bpmService.getIncidentes()).subscribe(async (resp: any) =>{
      console.log(resp);
      if(resp.status){
        this.incidentes = await resp.data;
        this.incidenteActual = await this.ticket.incidente_codigo;
      }else{
        this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
      }
    });
    (await this.bpmService.getPrioridades()).subscribe(async (resp: any) =>{
      console.log(resp);
      if(resp.status){
        this.prioridades = await resp.data;
        this.prioridadActual = await this.ticket.prioridad_codigo;
      }else{
        this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
      }
    });
    (await this.bpmService.getSectores()).subscribe(async (resp: any) =>{
      console.log(resp);
      if(resp.status){
        this.sectores = await resp.data;
        this.sectorActual = await this.ticket.sector_codigo;
      }else{
        this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
      }
    });
    (await this.bpmService.getAreas(this.sedeActual)).subscribe(async (resp: any) =>{
      console.log(resp);
      if(resp.status){
        this.areas = await resp.data;
        this.areaActual = await this.ticket.area_codigo;
      }else{
        this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
      }
    });
    (await this.bpmService.getStatus()).subscribe(async (resp: any) =>{
      console.log(resp);
      if(resp.status){
        this.status = await resp.data;
        this.estadoActual = await this.ticket.estatus_codigo;
        console.log(this.estadoActual);
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
    this.categoriaActual = ev.detail.value;
  }

  selectArea(ev){
    console.log(ev);
    this.areaActual = ev.detail.value;
  }

  selectIncidente(ev){
    this.incidenteActual = ev.detail.value;
  }

  selectSede(ev){
    this.sedeActual = ev.detail.value;
  }

  selectSector(ev){
    this.sectorActual = ev.detail.value;
  }

  selectPrioridad(ev){
    this.prioridadActual = ev.detail.value;
  }

  selectEstado(ev){
    this.estadoActual = ev.detail.value;
  }

  async editar(){
    this.presentLoading();
    if(this.sede === '' && this.sector === '' && this.area === '' && this.categoria === ''
      && this.prioridad === '' && this.incidente === ''){
        this.alertService.presentAlert('Debe de llenar todos los campos antes de actualizar el ticket.');
    }else{
      (await this.bpmService.editar(this.ticket.codigo, this.descripcion, this.incidenteActual, this.prioridadActual, this.sedeActual,
                                    this.sectorActual, this.areaActual))
        .subscribe(async (resp: any) => {
          console.log(resp);
          if(resp.status){
            await (await this.bpmService.getTicket(this.ticket.codigo)).subscribe(async (res: any)=>{
              if(res.status){
                console.log(resp);
                this.ticketNuevo = await res.data;
                await this.alertService.presentToast('El ticket se ha actualizado correctamente', 'success', 2500);
                this.post();
                await this.modalController.dismiss(this.ticketNuevo);
              }else{
                this.alertService.presentAlert(res.message);
              }
            });
          }else{
            this.alertService.presentAlert(resp.message);
          }
        });
        this.modalController.dismiss();
    }

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    await loading.present();
  }

  onFileSelected(ev){
    console.log(ev);
    this.selectedFile = ev.target.files[0];
  }

  async post(){
    (await this.bpmService.post(this.ticket.codigo, 1, this.selectedFile, this.descripcion)).subscribe((resp: any) =>{
      console.log(resp);
    });
  }


}
