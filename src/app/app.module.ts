import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Device } from '@awesome-cordova-plugins/device/ngx';
import { Clipboard } from '@awesome-cordova-plugins/clipboard/ngx';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot({backButtonText: 'atrás', mode: 'ios'}), AppRoutingModule, FormsModule,
            IonicStorageModule.forRoot(), HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Device, Clipboard, SocialSharing],
  bootstrap: [AppComponent],
})
export class AppModule {}
