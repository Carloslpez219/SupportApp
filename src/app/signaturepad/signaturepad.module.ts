import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignaturepadPageRoutingModule } from './signaturepad-routing.module';

import { SignaturepadPage } from './signaturepad.page';
import SignaturePad from 'signature_pad';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignaturepadPageRoutingModule,
    SignaturePad
  ],
  declarations: [SignaturepadPage]
})
export class SignaturepadPageModule {}
