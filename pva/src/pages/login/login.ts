import { Component, Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController, Alert } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../registration/registration';
import { HTTP } from '@ionic-native/http';
import { Storage } from '@ionic/storage';


declare let cordova: any;


@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})



@Injectable()
export class LoginPage {

    username: string = '';
    password: string = '';

    constructor(public navCtrl: NavController, private alerts: AlertController, private http: HTTP, private store: Storage) { 
        
    }



    login() {
        var header = cordova.plugin.http.getBasicAuthHeader(this.username, this.password);

        const options = {
            method: 'get',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify({ username: this.username, password: this.password }),
            dataType: "json",
            crossDomain: true,
            headers: header
        };

        let alert = this.alerts.create({ //creates alert 
            title: 'Error',
            message: 'Username/password is invalid!',
            cssClass: 'alertCustomCss',
            buttons: ['Dismiss']
        })


        cordova.plugin.http.sendRequest('http://127.0.0.1:5000/api/login/', options, response => {

            try {   //onSuccess
                response.data = JSON.parse(response.data);
                
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('public_id', response.data.public_id);
                localStorage.setItem('role_id', response.data.role_id);
                localStorage.setItem('prisoner', response.data.prisoner);

                this.navCtrl.setRoot(TabsPage, {}, { animate: true, animation: 'md-transition', direction: 'forward' });

            } catch (e) {
                console.error('JSON parsing error');
            }

        }, response => {    //onFail
            console.log('403');
            alert.present();

        });
    }

    signup() {
        this.navCtrl.setRoot(RegisterPage, {}, { animate: true, animation: 'md-transition', direction: 'forward' });
    }
}
