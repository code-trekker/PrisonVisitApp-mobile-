import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController, ModalController, NavParams, Content, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AnnouncementsContent } from '../announcements/announcements';
import { trigger, transition, useAnimation } from '@angular/animations';
import { flipInX, fadeIn } from 'ng-animate';
import { DataServiceProvider } from '../../providers/data-service/data-service';


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
        ]),
        trigger('fadeIn', [
            transition('* => *',
                useAnimation(fadeIn)
            ),
        ])
    ],
    providers: [DataServiceProvider]
})


export class HomePage {

    @ViewChild(Content) content: Content;
    datalength: number;
    public information: any;
    colors: string;
    public showButton = false;
    loader: any;

    constructor(public navCtrl: NavController, private http: HttpClient, public modalCtrl: ModalController, public myElement: ElementRef, public loadingCtrl: LoadingController) {

    }

    // presentLoading() {
        

    //     setTimeout(() => {
    //         loader.dismiss();
    //     }, 5000);
    // }

    ngOnInit() {
        this.loader = this.loadingCtrl.create({
            content: `Fetching data...`,
            spinner: 'dots',
            enableBackdropDismiss: true
            // duration: 5000

        });

        this.loader.present();
        this.http
            .get<Config>('http://localhost:5000/api/user/announcements')
            .subscribe((data) => {
                this.information = data.announcements;
                this.datalength = data.announcements.length;
                this.loader.dismiss();
            });
    }

    // loadData() {
    //     this.dataService.load()
    //     .then(data => {
    //         this.information = data.announcements;
    //         this.datalength = data.announcements.length;
    //     });
    // }

    onScroll(event) {
        this.showButton = true;
    }



    showDetails(title: string, date: string, content: string) {
        console.log('shows details');
        let modal = this.modalCtrl.create(AnnouncementsContent, { modalTitle: title, modalDate: date, modalContent: content }, { cssClass: "custom-modal" });
        modal.present();
    }

    slice: number = 4;
    

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

    scrollToTop() {
        console.log("up we go!");
        this.content.scrollToTop();
        this.showButton = false;
    }


}
