import { SerchebleSelectPage } from './../sercheble-select/sercheble-select.page';
import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { BPMService } from '../services/bpm.service';
import { AlertService } from '../services/alert.service';
import { Storage } from '@ionic/storage-angular';
import { Camera, CameraResultType } from '@capacitor/camera';

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
  sede = '';
  sector = '';
  area =  '';
  categoria = '';
  prioridad = '';
  incidente = '';
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
  datosUsuario;
  fileName;
  mostrarFoto = false;
  photo;
  categoriafound = '';
  incidenteFound = '';

  constructor(private loadingController: LoadingController, private modalController: ModalController, private bpmService: BPMService,
              private alertService: AlertService, private storage: Storage) { }

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
        await this.categorias.forEach(element => {
          if(element.codigo === this.ticket.categoria_codigo){
            this.categoriafound = element.nombre;
          }
        });
        this.categoriaActual = await this.ticket.categoria_codigo;
      }else{
        this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
      }
    });
    (await this.bpmService.getIncidentes(this.categoria)).subscribe(async (resp: any) =>{
      console.log(resp);
      if(resp.status){
        this.incidentes = await resp.data;
        await this.incidentes.forEach(element => {
          if(element.codigo === this.ticket.incidente_codigo){
            this.incidenteFound = element.nombre;
          }
        });
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
    (await this.bpmService.getAreas(this.sedeActual, this.area)).subscribe(async (resp: any) =>{
      console.log(resp);
      if(resp.status){
        this.areas = await resp.data;
        this.areaActual = await this.ticket.area_codigo;
      }else{
        this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
      }
    });
    (await this.bpmService.getStatus(this.ticket.codigo)).subscribe(async (resp: any) =>{
      console.log(resp);
      if(resp.status){
        this.status = await resp.data;
        this.estadoActual = await this.ticket.estatus_codigo;
      }else{
        this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
      }
    });
    this.descripcion = this.ticket.descripcion;
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

  async selectCategoria(){
    this.presentLoading();
    const data = this.categorias;
    const modal = await this.modalController.create({
      component: SerchebleSelectPage,
      backdropDismiss: false,
      componentProps: { data }
    });
    await modal.present();

    const value: any = await modal.onDidDismiss();
    if (value.data){
      console.log(value);
      this.categoriaActual = value.data;
      this.categorias.forEach(element => {
        if(element.codigo === this.categoriaActual){
          this.categoriafound = element.nombre;
        }
      });
    }
  }

  selectArea(ev){
    console.log(ev);
    this.areaActual = ev.detail.value;
  }

  async selectIncidente(){
    this.presentLoading();
    const data = this.incidentes;
    const modal = await this.modalController.create({
      component: SerchebleSelectPage,
      backdropDismiss: false,
      componentProps: { data }
    });
    await modal.present();

    const value: any = await modal.onDidDismiss();
    if (value.data){
      console.log(value);
      this.incidenteActual = value.data;
      this.incidentes.forEach(element => {
        if(element.codigo === this.incidenteActual){
          this.incidenteFound = element.nombre;
        }
      });
    }
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
    if(this.sedeActual === '' || this.sectorActual === '' || this.areaActual === '' || this.categoriaActual === ''
      || this.prioridadActual === '' || this.incidenteActual === '' || this.descripcion === ''){
        this.loadingController.dismiss();
        this.alertService.presentAlert('Debe de llenar todos los campos antes de actualizar el ticket.');
    }else{
      this.presentLoading();
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

  async takePicture(){

    const image = await Camera.getPhoto({
      quality: 70,
      allowEditing: false,
      resultType: CameraResultType.Base64
    });

    const imageUrl = await 'data:image/jpeg;base64,' + image.base64String;
    this.photo = await imageUrl;
    this.selectedFile = await this.dataURLtoFile(imageUrl, 'image');
    this.datosUsuario = await this.storage.get('datos');
    this.mostrarFoto = await true;
  }

  dataURLtoFile(dataurl, filename) {
    // eslint-disable-next-line one-var
    let arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type: mime});
}

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    await loading.present();
  }

  async onFileSelected(event) {
    this.datosUsuario = await this.storage.get('datos');
    this.selectedFile = event.target.files[0];
    this.fileName = this.selectedFile.name;
}

  async post(){
    (await this.bpmService.post(this.ticket.codigo, this.area, this.selectedFile, this.descripcion)).subscribe((resp: any) =>{
      console.log(resp);
    });
  }


}
