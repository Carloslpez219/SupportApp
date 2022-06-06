import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-signaturepad',
  templateUrl: './signaturepad.page.html',
  styleUrls: ['./signaturepad.page.scss'],
})
export class SignaturepadPage implements OnInit {
  @ViewChild('sPad', {static: true}) signaturePad;
  signPad: any;
  res: any;

  constructor( private modalController: ModalController) {
  }
  ngOnInit(): void {
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit(): void {
    this.signPad = new SignaturePad(this.signaturePad.nativeElement);
  }

  clear() {
    this.signPad.clear();
  }

  back(){
    this.modalController.dismiss();
  }

  async save(){
    const data = await this.signPad.toDataURL();
    this.modalController.dismiss(data);
  }

}

