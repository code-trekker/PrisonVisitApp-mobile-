import { Component, OnInit } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login'


@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})

export class RegisterPage{
    
    
    constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

    }


    submit(){
        let alert = this.alertCtrl.create({
            title: 'Confirm registration',
            message: 'Details confirmed. Proceed?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('cancelled');
                        alert.dismiss();
                        return false;
                    }
                },
                {
                    text: 'Submit',
                    handler: () => {
                        console.log('confirmed');
                        this.navCtrl.setRoot(LoginPage) //change to ajax registration POST request
                    }
                }
            ]
        });
        alert.present();
    }

    backlog(){
        this.navCtrl.setRoot(LoginPage)
    }
}
