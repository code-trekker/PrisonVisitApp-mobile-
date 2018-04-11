import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../registration/registration';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
    
    
    constructor(public navCtrl: NavController) {
    }

    login(){
        this.navCtrl.setRoot(TabsPage)
    }

    signup(){
        this.navCtrl.setRoot(RegisterPage)
    }
}
