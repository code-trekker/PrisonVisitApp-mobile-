import { Component, Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { AlertController } from 'ionic-angular';

declare let cordova: any;

@Component({
    selector: 'page-visit',
    templateUrl: 'visit.html'
})



export class VisitPage {

    date: string = '';
    count: string = '';
    time: string = '';
    relation: string = '';
    prisoner: string = localStorage.getItem('prisoner');
    id: string = localStorage.getItem('public_id');
    accountStat: any;
    disableButton: boolean;

    constructor(public navCtrl: NavController, private alerts: AlertController, private http: HTTP) { }

    ngOnInit() {
        this.accountStat = localStorage.getItem('accountStatus');
        // console.log(this.accountStat);
        this.prisoner = localStorage.getItem('prisoner');

        if (this.accountStat == 'false') {
            this.disableButton = true;
        } else {
            this.disableButton = null;
        }

    }

    schedule() {

        let visit_succ = this.alerts.create({ //creates alert 
            title: 'Success',
            message: 'Schedule details submitted!',
            cssClass: 'alertCustomCss',
            buttons: ['OK']
        })

        let alert = this.alerts.create({ //creates alert 
            title: 'Error',
            message: 'Incomplete information provided!',
            cssClass: 'alertCustomCss',
            buttons: ['Dismiss']
        })

        var tokens = localStorage.getItem('token');

        cordova.plugin.http.setDataSerializer("json");

        cordova.plugin.http.post('http://127.0.0.1:5000/api/user/visitation', {
            nameP: this.prisoner,
            vDate: this.date,
            numV: this.count,
            timeV: this.time,
            relation: this.relation,
            pid: this.id
        }, {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=utf-8",
                'x-access-token': tokens
            }, response => {

                try {
                    response.data = JSON.parse(response.data);
                    console.log(response.data.message);
                    visit_succ.present();
                } catch (e) {
                    console.error('JSON parsing error');
                }

            }, response => {
                // prints 403
                console.log(response.status);
                alert.present();
                //prints Permission denied
                console.log(response.error);
            });


    }
}
