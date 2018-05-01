import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


// export interface Config {
// 	technologies: string;
// }


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // public config : Config;
  // public columns : any;
  // public rows : any;

  constructor(public navCtrl: NavController, private _HTTP: HttpClient) {
    
    // this.columns = [
    //   { prop: 'name' },
    //   { name: 'Summary' },
    //   { name: 'Company' }
    // ];

  }

  // ionViewDidLoad() : void
  //  {
  //     this._HTTP
  //     .get<Config>('../../assets/data.json')
  //     .subscribe((data) =>
  //     {
  //        this.rows = data.technologies;
  //     });

  //  }
  

}
