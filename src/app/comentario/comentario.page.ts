import { Component, Input, OnInit } from '@angular/core';
import { BPMService } from '../services/bpm.service';
import { AlertService } from '../services/alert.service';
import { LoadingController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.page.html',
  styleUrls: ['./comentario.page.scss'],
})
export class ComentarioPage implements OnInit {

  @Input() ticket;
  viewEntered = false;
  comentario = '';
  selectedFile;
  ticketCodigo;

  constructor( private bpmService: BPMService, private alertService: AlertService, private loadingController: LoadingController,
    private modalController: ModalController ) { }

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

  async comentar(){
    (await this.bpmService.comentar(this.comentario,  this.ticket.codigo))
      .subscribe(async (resp: any)=>{
        console.log(resp);
        if(resp.status){
          this.ticketCodigo = await  resp.data.ticket_codigo;
          await this.post();
          this.alertService.presentToast('Comentario agregado correctamente', 'success', 2500);
          this.modalController.dismiss();
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
    console.log(this.selectedFile);
    (await this.bpmService.post(this.ticketCodigo, 1, this.selectedFile, this.comentario)).subscribe((resp: any) =>{
      console.log(resp);
    });
  }

}
