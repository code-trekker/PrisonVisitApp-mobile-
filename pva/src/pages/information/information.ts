import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
    selector: 'page-information',
    templateUrl: 'information.html'
})
export class InfoPage {


    constructor(public navCtrl: NavController) {

    }

    dismiss() {
        this.navCtrl.pop();
    }

}
