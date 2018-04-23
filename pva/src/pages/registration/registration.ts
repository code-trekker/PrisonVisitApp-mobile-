import { Component, OnInit, Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login'
import { HTTP } from '@ionic-native/http';


declare let cordova: any;

@Component({
    selector: 'page-registration',
    templateUrl: 'registration.html'
})


@Injectable()
export class RegisterPage {

    username: string = '';
    password: string = '';
    firstname: string = '';
    middlename: string = '';
    lastname: string = '';
    birthday: string = '';
    age: string = '';
    contact: string = '';
    address: string = '';
    prisoner: string = '';

    constructor(public navCtrl: NavController,
        private alertCtrl: AlertController,
        private http: HTTP) { }


    register() {

        // const options = {
        //     method: 'post',
        //     contentType: 'application/json; charset=utf-8',
        //     data: JSON.stringify({ username: this.username, password: this.password, firstname: this.firstname, middlename: this.middlename, lastname: this.lastname, birthday: this.birthday, age: this.age, contact: this.contact, address: this.address, prisoner: this.prisoner }),
        //     dataType: "json",
        //     crossDomain: true,
        // };

        let reg_succ = this.alertCtrl.create({ //creates alert 
            title: 'Success',
            subTitle: 'Registered successfully!',
            cssClass: 'alertCustomCss',
            buttons: ['OK']
        })

        cordova.plugin.http.setDataSerializer("json");


        let alert = this.alertCtrl.create({
            title: 'Confirm registration',
            message: 'Do you wish to proceed?',
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
                        cordova.plugin.http.post('http://127.0.0.1:5000/api/register', {
                            username: this.username,
                            password: this.password,
                            firstname: this.firstname,
                            middlename: this.middlename,
                            lastname: this.lastname,
                            birthday: this.birthday,
                            age: this.age,
                            contact: this.contact,
                            address: this.address,
                            prisoner: this.prisoner
                        }, {
                                "Accept": "application/json",
                                "Content-Type": "application/json; charset=utf-8",
                            }, response => {

                                try {
                                    response.data = JSON.parse(response.data);
                                    // prints test
                                    console.log(response.data.message);
                                    reg_succ.present();
                                    this.navCtrl.setRoot(LoginPage, {}, { animate: true, animation: 'md-transition', direction: 'forward' });
                                } catch (e) {
                                    console.error('JSON parsing error');
                                }
                            }, response => {
                                // prints 403
                                console.log(response.status);

                                //prints Permission denied
                                console.log(response.error);
                            });

                    }
                }
            ]
        });
        alert.present();
    }

    backlog() {
        this.navCtrl.setRoot(LoginPage, {}, { animate: true, animation: 'md-transition', direction: 'back' });
    }
}
