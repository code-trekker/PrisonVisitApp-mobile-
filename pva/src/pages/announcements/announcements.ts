import { Component } from '@angular/core';
import { NavController, Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
    selector: 'page-announcements',
    templateUrl: 'announcements.html'
})




export class AnnouncementsContent {

    title: any;
    date: any;
    content: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
        this.title = this.navParams.get('modalTitle');
        this.date = this.navParams.get('modalDate');
        this.content = this.navParams.get('modalContent');
    }

    ngOnInit() {
        
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

}
