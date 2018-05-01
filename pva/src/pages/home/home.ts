import { Component } from '@angular/core';
import { NavController, ModalController, NavParams  } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AnnouncementsContent } from '../announcements/announcements';




export interface Config {
    announcements: string;
}


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})


export class HomePage {

    
    public information: any;

    constructor(public navCtrl: NavController, private http: HttpClient, public modalCtrl: ModalController) {

    }

    ionViewDidLoad() {
        this.http
            .get<Config>('http://localhost:5000/api/user/announcements')
            .subscribe((data) => {
                this.information = data.announcements;
            });

    }

    showDetails(title:string, date:string, content:string) {
        console.log('shows details');
        let modal = this.modalCtrl.create(AnnouncementsContent, {modalTitle: title, modalDate: date, modalContent: content}, {cssClass: "custom-modal"});
        modal.present();
    }


}
