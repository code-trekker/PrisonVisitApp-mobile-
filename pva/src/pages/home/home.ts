import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AnnouncementsContent } from '../announcements/announcements';
import { trigger, transition, animate, useAnimation, stagger, query } from '@angular/animations';
import { bounce, flipInX, rollIn } from 'ng-animate';



export interface Config {
    announcements: string;
}


@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    animations: [
        trigger('flipInX', [
            transition('* => *',
                useAnimation(flipInX)
            )
        ])
    ]
})


export class HomePage {

    datalength: number;
    public information: any;

    constructor(public navCtrl: NavController, private http: HttpClient, public modalCtrl: ModalController) {

    }


    ngOnInit() {
        this.http
            .get<Config>('http://localhost:5000/api/user/announcements')
            .subscribe((data) => {
                this.information = data.announcements;
                this.datalength = data.announcements.length;        
            });
    }



    showDetails(title: string, date: string, content: string) {
        console.log('shows details');
        let modal = this.modalCtrl.create(AnnouncementsContent, { modalTitle: title, modalDate: date, modalContent: content }, { cssClass: "custom-modal" });
        modal.present();
    }
    
    slice: number = 4;
    counter: number = 0;

    doInfinite(infiniteScroll) {
        setTimeout(() => {
            if (this.datalength >= 5) {
                this.slice += 4;
                infiniteScroll.complete();
                if (this.slice > this.datalength) {
                    infiniteScroll.complete();
                    infiniteScroll.enable(false);
                }
            } else {
                infiniteScroll.enable(false);
            }
        }, 200);
    }


}
