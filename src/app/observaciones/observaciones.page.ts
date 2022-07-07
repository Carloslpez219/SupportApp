import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BPMService } from '../services/bpm.service';

@Component({
  selector: 'app-observaciones',
  templateUrl: './observaciones.page.html',
  styleUrls: ['./observaciones.page.scss'],
})
export class ObservacionesPage implements OnInit {

  @Input() paso;
  @Input() ticket;
  viewEntered;
  ejecucion;

  constructor( private modalController: ModalController, private bpmService: BPMService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.viewEntered = true;
  }

  ionViewWillLeave(){
    this.viewEntered = false;
  }

  async back(){
    this.modalController.dismiss();
  }

  async method(){
    if(this.paso.checked){
      this.ejecucion = 1;
    }else{
      this.ejecucion = 0;
    }
    (await this.bpmService.ejecutarPaso(this.ticket.codigo, this.paso.paso_codigo, this.paso.tipo_incidente, this.ejecucion,
      this.paso.observaciones)).subscribe(resp =>{
                                    console.log(resp);
                                  });
  }

}
