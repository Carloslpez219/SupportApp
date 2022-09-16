import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { BPMService } from '../services/bpm.service';
import { AlertService } from '../services/alert.service';
import { ActionSheetController, LoadingController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.page.html',
  styleUrls: ['./comentario.page.scss'],
})
export class ComentarioPage implements OnInit {

  @Input() ticket;
  viewEntered = false;
  comentarioCodigo;
  comentario = '';
  selectedFile;
  ticketCodigo;
  fileName = '';
  datosUsuario;
  mostrarFoto = false;
  photo;
  ticketNuevo: any;

  constructor( private bpmService: BPMService, private alertService: AlertService, private loadingController: LoadingController,
    private modalController: ModalController, private http: HttpClient, private storage: Storage,
    private actionSheetController: ActionSheetController ) { }

  ngOnInit() {
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

  async comentar(){
    await this.presentLoading();
    (await this.bpmService.comentar(this.comentario,  this.ticket.codigo))
      .subscribe(async (resp: any)=>{
        console.log(resp);
        if(resp.status){
          this.ticketCodigo = await  resp.data.ticket_codigo;
          this.comentarioCodigo = await resp.data.comentario_codigo;
          await this.post();
          setTimeout(async () => {
            await (await this.bpmService.getTicket(this.ticketCodigo)).subscribe(async (res: any)=>{
              this.ticketNuevo = await res.data;
              await this.alertService.presentToast('Comentario agregado correctamente', 'success', 2500);
              await this.modalController.dismiss(this.ticketNuevo);
            });
          }, 500);
        }else{
          this.alertService.presentAlert(resp.message);
        }
      });
  }

  async onFileSelected(event) {
    this.datosUsuario = await this.storage.get('datos');
    this.selectedFile = event.target.files[0];
    this.fileName = this.selectedFile.name;
}

  async post(){
    if (this.selectedFile) {
      console.log(this.selectedFile);
      const formData = new FormData();

      formData.append('documento', this.selectedFile);

      // eslint-disable-next-line max-len
      const upload$ = this.http.post(`https://gt.disatel.app/ROOT/API/API_ticket_foto.php?&ticket=${this.ticketCodigo}&usuario=${this.datosUsuario.codigo}&comentario=${this.comentarioCodigo}`, formData);

      upload$.subscribe(resp =>{
        console.log(resp);
      });
  }
  }

  async takePicture(){

      const image = await Camera.getPhoto({
        quality: 70,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        promptLabelHeader: 'Seleccionar método',
        promptLabelPhoto: 'Galería',
        promptLabelPicture: 'Tomar fotografía',
        presentationStyle: 'popover'
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

}
