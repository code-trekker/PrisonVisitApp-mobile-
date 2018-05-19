import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



export interface Config {
    announcements: string;
}

@Injectable()
export class DataServiceProvider {

    public information: any;

    constructor(public http: HttpClient) {
        console.log('Hello DataServiceProvider Provider');
    }

    load() {

        if (this.information) {
            return Promise.resolve(this.information);
        }

        return new Promise(resolve => {
            this.http
            .get<Config>('http://localhost:5000/api/user/announcements')
            .subscribe((data) => {
                this.information = data;
                
                resolve(this.information);
            });
        })
    }

}
