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

  initializeApp() {
    /* To make sure we provide the fastest app loading experience
       for our users, hide the splash screen automatically
       when the app is ready to be used:

        https://capacitor.ionicframework.com/docs/apis/splash-screen#hiding-the-splash-screen
    */
    SplashScreen.hide();

    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    PushNotifications.addListener('pushNotificationReceived',
      async (notification: PushNotificationSchema) => {
        console.log(notification);
        this.showAlert('Notification', JSON.stringify(notification));
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      async (notification: ActionPerformed) => {
        console.log(notification);
        const data = notification.notification.data;
        console.log('Action performed: ' + JSON.stringify(notification.notification));
        this.showAlert('Notification', JSON.stringify(notification.notification));
        this.router.navigateByUrl('/');
      }
    );

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
