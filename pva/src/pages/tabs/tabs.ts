import { Component } from '@angular/core';

import { AboutPage } from '../about/about';

import { HomePage } from '../home/home';
import { VisitPage } from '../visit/visit';
import { CommentPage } from '../comment/comment';

import { NavController } from 'ionic-angular';


@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    title: string;

    constructor(public navCtrl: NavController) {


    }
    ngAfterViewInit() {

        // must wait for AfterViewInit if you want to modify the tabs instantly
        this.title = 'Home';

    }

    tab1Root = HomePage;
    tab2Root = AboutPage;
    tab3Root = VisitPage;
    tab4Root = CommentPage;

    onTabSelect(ev: any) {
        //console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
        this.title = ev.id;
    }
}
