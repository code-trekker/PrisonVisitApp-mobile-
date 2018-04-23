import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('sidebar') nav: NavController
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private alerts: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  logout():void {
    localStorage.removeItem('token');
    localStorage.removeItem('public_id');
    localStorage.removeItem('role_id');
    let alert = this.alerts.create({ //creates alert 
      title: 'Logged out',
      subTitle: 'You have successfully logged out!',
      cssClass: 'alertCustomCss',
      buttons: ['OK']
    })
    alert.present();
    this.nav.setRoot(LoginPage);
  }

  
}
