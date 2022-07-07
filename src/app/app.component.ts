import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { AlertController } from '@ionic/angular';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(private alert: AlertController, private router: Router) {
    this.initializeApp();
  }

  async initializeApp() {
    /* To make sure we provide the fastest app loading experience
       for our users, hide the splash screen automatically
       when the app is ready to be used:

        https://capacitor.ionicframework.com/docs/apis/splash-screen#hiding-the-splash-screen
    */
    await PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    await PushNotifications.addListener('pushNotificationReceived',
      async (notification: PushNotificationSchema) => {
        console.log('pushNotificationReceived: ' + notification);
        this.showAlert(notification.title, notification.body);
      }
    );

     // Method called when tapping on a notification
     await PushNotifications.addListener('pushNotificationActionPerformed', (notification: ActionPerformed) => {
        this.router.navigateByUrl('/').then( success =>{
          if(success){
            this.showAlert(notification.notification.title, notification.notification.body);
          }else{
            this.showAlert('Error', 'Ha ocurrido un error de ejecución.');
          }
        });
      }
    );

    await SplashScreen.hide();

  }

  async showAlert(header, message){
    const alert = await this.alert.create({
      header,
      message,
      mode: 'ios',
      buttons: ['ok']
    });

    await alert.present();
  }

}
