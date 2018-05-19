import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

declare let cordova: any;

@Component({
    selector: 'page-comment',
    templateUrl: 'comment.html'
})



export class CommentPage {


    myStuff: string = '';
    id: string = localStorage.getItem('public_id');
    accountStat: any;
    disableButton: boolean;

    constructor(public navCtrl: NavController, private alerts: AlertController, private http: HTTP) {

    }

    ngOnInit() {
        this.accountStat = localStorage.getItem('accountStatus');
        
        if (this.accountStat == 'false') {
            this.disableButton = true;
        } else {
            this.disableButton = null;
        }
    }

    submitComment() {

        let comment_succ = this.alerts.create({ //creates alert 
            title: 'Success',
            message: 'Comment submitted. Thank you for your feedback!',
            cssClass: 'alertCustomCss',
            buttons: ['OK']
        })

        let alert = this.alerts.create({ //creates alert 
            title: 'Error',
            message: 'Incomplete information provided!',
            cssClass: 'alertCustomCss',
            buttons: ['Dismiss']
        })


        cordova.plugin.http.setDataSerializer("json");

        var tokens = localStorage.getItem('token');

        cordova.plugin.http.post('http://127.0.0.1:5000/api/user/comment', {
            public_id: this.id,
            comment: this.myStuff

        }, {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=utf-8",
                'x-access-token': tokens
            }, response => {

                try {
                    response.data = JSON.parse(response.data);
                    console.log(response.data.message);
                    comment_succ.present();
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
        console.log('Submit button pressed');

    }
}
