import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { BPMService } from '../services/bpm.service';
import { AlertService } from '../services/alert.service';
import { Storage } from '@ionic/storage-angular';
import { Camera, CameraResultType } from '@capacitor/camera';

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
  // eslint-disable-next-line @typescript-eslint/naming-convention
  MostrarPrioridad = false;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  nombre_prioridad;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  codigo_prioridad;
  nombreSector;
  codigoSector;
  mostrarSector = false;
  //
  sede = '';
  area = '';
  categoria = '';
  incidente = '';
  descripcion = '';
  selectedFile;
  ticketCodigo = '';
  datosUsuario;
  fileName;
  mostrarFoto = false;
  photo;

  constructor(private navCtrl: NavController, private bpmService: BPMService, private alertService: AlertService,
              private loadingController: LoadingController, private storage: Storage) { }

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
    (await this.bpmService.getIncidentes(this.categoria)).subscribe(async (resp: any) =>{
      if(resp.status){
        this.incidentes = await resp.data;
      }else{
        this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
      }
    });
    (await this.bpmService.getAreas(this.sede, this.area)).subscribe((resp: any) =>{
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

  async selectCategoria(ev){
    this.categoria = ev.detail.value;
    (await this.bpmService.getIncidentes(this.categoria)).subscribe((resp: any) =>{
      if(resp.status){
        this.incidentes = resp.data;
      }else{
        this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
      }
    });
  }

  async selectArea(ev){
    this.area = await ev.detail.value;
    (await this.bpmService.getAreas(this.sede, this.area)).subscribe(async (resp: any) =>{
      console.log(resp);
      if(resp.status){
        this.codigoSector = await resp.data[0].codigo_sector;
        this.nombreSector = await resp.data[0].nombre_sector;
        this.mostrarSector = await true;
      }else{
        this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
      }
    });

  }

  selectIncidente(ev){
    this.incidente = ev.detail.value;

    this.incidentes.forEach(element => {
      if(element.codigo === this.incidente){
        this.nombre_prioridad = element.nombre_prioridad;
        this.codigo_prioridad = element.codigo_prioridad;
     }
    });


    this.MostrarPrioridad = true;
  }

  async selectSede(ev){
    this.sede = ev.detail.value;
    (await this.bpmService.getAreas(this.sede, this.area)).subscribe((resp: any) =>{
      console.log(resp);
      if(resp.status){
        this.areas = resp.data;
      }else{
        this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
      }
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    await loading.present();
  }

  async guardarTicket(){
    this.presentLoading();
    (await this.bpmService.guardarTicket(this.descripcion, this.incidente, this.codigo_prioridad, this.sede, this.codigoSector, this.area))
    .subscribe(async (resp: any) =>{
      console.log(resp);
      if(resp.status){
        this.ticketCodigo = await  resp.data.ticket_codigo;
        await this.alertService.presentToast('El ticket ha sigo generado con éxito.', 'success', 2500);
        this.loadingController.dismiss();
        this.navCtrl.back();
        this.post();
      }else{
        this.alertService.presentAlert(resp.message);
        this.loadingController.dismiss();
      }
    });
  }

  async onFileSelected(event) {
    this.datosUsuario = await this.storage.get('datos');
    this.selectedFile = event.target.files[0];
    this.fileName = this.selectedFile.name;
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

  async post(){
    (await this.bpmService.post(this.ticketCodigo, this.area, this.selectedFile, this.descripcion)).subscribe((resp: any) =>{
      console.log(resp);
    });
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


}
