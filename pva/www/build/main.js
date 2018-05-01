webpackJsonp([0],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration_registration__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, alerts, http, store) {
        this.navCtrl = navCtrl;
        this.alerts = alerts;
        this.http = http;
        this.store = store;
        this.username = '';
        this.password = '';
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var header = cordova.plugin.http.getBasicAuthHeader(this.username, this.password);
        var options = {
            method: 'get',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify({ username: this.username, password: this.password }),
            dataType: "json",
            crossDomain: true,
            headers: header
        };
        var alert = this.alerts.create({
            title: 'Error',
            message: 'Username/password is invalid!',
            cssClass: 'alertCustomCss',
            buttons: ['Dismiss']
        });
        cordova.plugin.http.sendRequest('http://127.0.0.1:5000/api/login/', options, function (response) {
            try {
                response.data = JSON.parse(response.data);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('public_id', response.data.public_id);
                localStorage.setItem('role_id', response.data.role_id);
                localStorage.setItem('prisoner', response.data.prisoner);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */], {}, { animate: true, animation: 'md-transition', direction: 'forward' });
            }
            catch (e) {
                console.error('JSON parsing error');
            }
        }, function (response) {
            console.log('403');
            alert.present();
        });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__registration_registration__["a" /* RegisterPage */], {}, { animate: true, animation: 'md-transition', direction: 'forward' });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Lee\Desktop\pv\pva\src\pages\login\login.html"*/'<ion-content padding class="login-page">\n\n  <br>\n\n  <div text-center>\n\n    <img src="assets/imgs/mob.jpg" >\n\n  </div>\n\n\n\n\n\n  <form fixed>\n\n\n\n    <ion-item no-lines class="login-input">\n\n      <ion-label floating>\n\n        <ion-icon name="ios-contact"></ion-icon> Username</ion-label>\n\n      <ion-input [(ngModel)]="username" name="username" type="text" value=""></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item no-lines class="login-input">\n\n      <ion-label floating>\n\n        <ion-icon name="ios-lock"></ion-icon> Password</ion-label>\n\n      <ion-input [(ngModel)]="password" name="password" type="password" value=""></ion-input>\n\n    </ion-item>\n\n\n\n    <br>\n\n    <br>\n\n    <div>\n\n      <button ion-button block round (click)="login()" color="dark">Sign In</button>\n\n      <p style="text-align: center; ">\n\n        <i>Don\'t have an account?</i>\n\n      </p>\n\n      <button ion-button block round (click)="signup()" color="dark">Sign Up</button>\n\n    </div>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Lee\Desktop\pv\pva\src\pages\login\login.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 140;

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 183;

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visit_visit__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__comment_comment__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__visit_visit__["a" /* VisitPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__comment_comment__["a" /* CommentPage */];
    }
    TabsPage.prototype.ngAfterViewInit = function () {
        // must wait for AfterViewInit if you want to modify the tabs instantly
        this.title = 'Home';
    };
    TabsPage.prototype.onTabSelect = function (ev) {
        //console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
        this.title = ev.id;
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Lee\Desktop\pv\pva\src\pages\tabs\tabs.html"*/'<ion-header>\n    <ion-navbar color="dark">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n  \n      <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<super-tabs toolbarBackground="dark" toolbarColor="main" tabsPlacement="bottom" indicatorColor="main" [config]="{ sideMenu: \'left\' }" (tabSelect)="onTabSelect($event)">\n  <super-tab [root]="tab1Root" icon="icon-ai-announce" id="Home" (ionSelect)="this.title =\'Home\'"></super-tab>\n  <super-tab [root]="tab2Root" icon="icon-ai-rules" id="Rules" (ionSelect)="this.title =\'Rules\'"></super-tab>\n  <super-tab [root]="tab3Root" icon="icon-ai-prison-visit" id="Visit" (ionSelect)="this.title =\'Visit\'"></super-tab>\n  <super-tab [root]="tab4Root" icon="icon-ai-comments" id="Comment" (ionSelect)="this.title =\'Comment\'"></super-tab>\n</super-tabs>\n'/*ion-inline-end:"C:\Users\Lee\Desktop\pv\pva\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        var localData = this.http.get('assets/info.json').map(function (res) { return res.json().items; });
        localData.subscribe(function (data) {
            _this.information = data;
        });
    }
    AboutPage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    AboutPage.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Lee\Desktop\pv\pva\src\pages\about\about.html"*/'<ion-content padding>\n    <br>\n    <h1 text-center padding style="font-size: 45px;">Rules and Information</h1>\n\n\n    <div class="header-border" style="border-style:solid; border-radius: 10px;">\n        <ion-list style="padding: 10px;" class="accordion-list">\n            <!-- First Level -->\n            <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n                <!-- Toggle Button -->\n                <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n                    <ion-icon item-left name="ios-arrow-dropright" *ngIf="!item.open"></ion-icon>\n                    <ion-icon item-left name="ios-arrow-dropdown" *ngIf="item.open"></ion-icon>\n                    <h1>{{ item.name }}</h1>\n                </button>\n\n                <ion-list *ngIf="item.children && item.open" no-lines>\n                    <!-- Second Level -->\n                    <ion-list-header *ngFor="let child of item.children; let j = index" no-padding>\n                        <!-- Toggle Button -->\n                        <button ion-item (click)="toggleItem(i, j)" *ngIf="child.children" class="child" detail-none>\n                            <ion-row align-items>\n                                <ion-icon item-left name="ios-add" *ngIf="!child.open"></ion-icon>\n                                <ion-icon item-left name="ios-close" *ngIf="child.open"></ion-icon>\n                                <ion-icon style="font-size: 40px; padding: 3px" name={{child.icon1}}></ion-icon>\n                                <ion-icon style="font-size: 40px; padding: 3px" name={{child.icon2}}></ion-icon>\n                                <h3>{{ child.name }}</h3>\n                            </ion-row>\n                        </button>\n\n                        <!-- Direct Add Button as Fallback -->\n                        <ion-item *ngIf="!child.children" ion-item detail-none class="child-item" text-wrap>\n                            <h3>{{ child.name }}</h3>\n                            <p>{{ child.information }}</p>\n                        </ion-item>\n\n                        <ion-list *ngIf="child.children && child.open">\n                            <!-- Third Level -->\n                            <ion-item *ngFor="let item of child.children; let k = index" detail-none class="child-item" text-wrap>\n                                <h2>{{ item.name }}</h2>\n                                <p>{{ item.information }}</p>\n                                <!-- Direct Add Button -->\n                            </ion-item>\n                        </ion-list>\n\n                    </ion-list-header>\n                </ion-list>\n\n            </ion-list-header>\n        </ion-list>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Lee\Desktop\pv\pva\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// export interface Config {
// 	technologies: string;
// }
var HomePage = /** @class */ (function () {
    // public config : Config;
    // public columns : any;
    // public rows : any;
    function HomePage(navCtrl, _HTTP) {
        // this.columns = [
        //   { prop: 'name' },
        //   { name: 'Summary' },
        //   { name: 'Company' }
        // ];
        this.navCtrl = navCtrl;
        this._HTTP = _HTTP;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Lee\Desktop\pv\pva\src\pages\home\home.html"*/'\n\n<ion-content padding text-center center>\n  <br>\n  <h1 padding style="font-size: 45px;">Announcements</h1>\n\n  <ion-row>\n      <ion-col>\n        <strong><h3>Title</h3></strong>\n      </ion-col>\n      <ion-col>\n        <strong><h3>Date</h3></strong>\n      </ion-col>\n  </ion-row>\n    \n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Lee\Desktop\pv\pva\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VisitPage = /** @class */ (function () {
    function VisitPage(navCtrl, alerts, http) {
        this.navCtrl = navCtrl;
        this.alerts = alerts;
        this.http = http;
        this.date = '';
        this.count = '';
        this.time = '';
        this.relation = '';
        this.prisoner = localStorage.getItem('prisoner');
        this.id = localStorage.getItem('public_id');
    }
    VisitPage.prototype.ngOnInit = function () {
        // must wait for AfterViewInit if you want to modify the tabs instantly
        this.prisoner = localStorage.getItem('prisoner');
    };
    VisitPage.prototype.schedule = function () {
        var visit_succ = this.alerts.create({
            title: 'Success',
            message: 'Schedule details submitted!',
            cssClass: 'alertCustomCss',
            buttons: ['OK']
        });
        var alert = this.alerts.create({
            title: 'Error',
            message: 'Incomplete information provided!',
            cssClass: 'alertCustomCss',
            buttons: ['Dismiss']
        });
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
        }, function (response) {
            try {
                response.data = JSON.parse(response.data);
                console.log(response.data.message);
                visit_succ.present();
            }
            catch (e) {
                console.error('JSON parsing error');
            }
        }, function (response) {
            // prints 403
            console.log(response.status);
            alert.present();
            //prints Permission denied
            console.log(response.error);
        });
    };
    VisitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-visit',template:/*ion-inline-start:"C:\Users\Lee\Desktop\pv\pva\src\pages\visit\visit.html"*/'\n\n<ion-content>\n  <br><br>\n  <h1 text-center padding style="font-size: 50px;">Schedule A Visit</h1>\n\n  <h2 text-wrap style="padding-left: 25px; font-size: 22px;">Prisoner Name: {{prisoner}}</h2>\n  <form text-center style="padding: 10px;">\n   \n    <ion-item no-lines class="scheduleVisit">\n      <ion-label>Date of Visit</ion-label>\n      <ion-input [(ngModel)]="date" name="date" type="date" value=""></ion-input>\n    </ion-item>\n\n    <ion-item no-lines class="scheduleVisit">\n      <ion-label>Relationship to Inmate</ion-label>\n      <ion-select [(ngModel)]="relation" name="relation" value="">\n        <ion-option value="Spouse">Spouse</ion-option>\n        <ion-option value="Parent">Parent</ion-option>\n        <ion-option value="Child">Child</ion-option>\n        <ion-option value="Sibling">Sibling</ion-option>\n        <ion-option value="Relative">Relative</ion-option>\n        <ion-option value="Friend">Friend</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-lines class="scheduleVisit">\n      <ion-label>Number of Visitors</ion-label>\n      <ion-select [(ngModel)]="count" name="count" value="">\n        <ion-option value="1">1 (Alone)</ion-option>\n        <ion-option value="2">2</ion-option>\n        <ion-option value="3">3</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-lines class="scheduleVisit">\n        <ion-label>Time</ion-label>\n        <ion-select [(ngModel)]="time" name="time" value="">\n          <ion-option value="8:00 AM">8:00 AM</ion-option>\n          <ion-option value="8:30 AM">8:30 AM</ion-option>\n          <ion-option value="9:00 AM">9:00 AM</ion-option>\n          <ion-option value="9:30 AM">9:30 AM</ion-option>\n          <ion-option value="10:00 AM">10:00 AM</ion-option>\n          <ion-option value="10:30 AM">10:30 AM</ion-option>\n          <ion-option value="11:00 AM">11:00 AM</ion-option>\n          <ion-option value="11:30 AM">11:30 AM</ion-option>\n          <ion-option value="12:00 PM">12:00 PM</ion-option>\n          <ion-option value="12:30 PM">12:30 PM</ion-option>\n          <ion-option value="1:00 PM">1:00 PM</ion-option>\n          <ion-option value="1:30 PM">1:30 PM</ion-option>\n          <ion-option value="2:00 PM">2:00 PM</ion-option>\n          <ion-option value="2:30 PM">2:30 PM</ion-option>\n          <ion-option value="3:00 PM">3:00 PM</ion-option>\n          <ion-option value="3:30 PM">3:30 PM</ion-option>\n          <ion-option value="4:00 PM">4:00 PM</ion-option>\n          <ion-option value="4:30 PM">4:30 PM</ion-option>\n          <ion-option value="5:00 PM">5:00 PM</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <br><button ion-button style="width: 20rem; border-radius: 10px;" class="scheduleVisit" (click)="schedule()" color="dark">Submit</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Lee\Desktop\pv\pva\src\pages\visit\visit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */]])
    ], VisitPage);
    return VisitPage;
}());

//# sourceMappingURL=visit.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentPage = /** @class */ (function () {
    function CommentPage(navCtrl, alerts, http) {
        this.navCtrl = navCtrl;
        this.alerts = alerts;
        this.http = http;
        this.myStuff = '';
        this.id = localStorage.getItem('public_id');
    }
    CommentPage.prototype.submitComment = function () {
        var comment_succ = this.alerts.create({
            title: 'Success',
            message: 'Comment submitted. Thank you for your feedback!',
            cssClass: 'alertCustomCss',
            buttons: ['OK']
        });
        var alert = this.alerts.create({
            title: 'Error',
            message: 'Incomplete information provided!',
            cssClass: 'alertCustomCss',
            buttons: ['Dismiss']
        });
        cordova.plugin.http.setDataSerializer("json");
        var tokens = localStorage.getItem('token');
        cordova.plugin.http.post('http://127.0.0.1:5000/api/user/comment', {
            public_id: this.id,
            comment: this.myStuff
        }, {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8",
            'x-access-token': tokens
        }, function (response) {
            try {
                response.data = JSON.parse(response.data);
                console.log(response.data.message);
                comment_succ.present();
            }
            catch (e) {
                console.error('JSON parsing error');
            }
        }, function (response) {
            // prints 403
            console.log(response.status);
            alert.present();
            //prints Permission denied
            console.log(response.error);
        });
        console.log('Submit button pressed');
    };
    CommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-comment',template:/*ion-inline-start:"C:\Users\Lee\Desktop\pv\pva\src\pages\comment\comment.html"*/'<ion-content center text-center padding>\n\n    <br>\n\n    <br>\n\n    <h1 style="font-size: 45px;">Comments & Suggestions</h1>\n\n    <h3 padding>Do you have any comments or suggestions? We would love to hear from you!</h3>\n\n    <textarea rows="5" maxLength="750" id="myStuff" [(ngModel)]="myStuff" placeholder="Tap here to type" wrap="hard" onfocus="this.placeholder = \'\'" onblur="this.placeholder = \'Tap here to type\'"></textarea>\n\n\n\n    <br>\n\n    <br>\n\n    <button ion-button style="width: 20rem; border-radius: 10px;" class="comment" (click)="submitComment()" color="dark" onclick="document.getElementById(\'myStuff\').value = \'\'">Submit</button>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Lee\Desktop\pv\pva\src\pages\comment\comment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */]])
    ], CommentPage);
    return CommentPage;
}());

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.username = '';
        this.password = '';
        this.firstname = '';
        this.middlename = '';
        this.lastname = '';
        this.birthday = '';
        this.age = '';
        this.contact = '';
        this.address = '';
        this.prisoner = '';
    }
    RegisterPage.prototype.register = function () {
        var _this = this;
        var reg_succ = this.alertCtrl.create({
            title: 'Success',
            message: 'Registered successfully!',
            cssClass: 'alertCustomCss',
            buttons: ['OK']
        });
        cordova.plugin.http.setDataSerializer("json");
        var alert = this.alertCtrl.create({
            title: 'Confirm registration',
            message: 'Are you sure?',
            cssClass: 'alertCustomCss',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('cancelled');
                        alert.dismiss();
                        return false;
                    }
                },
                {
                    text: 'Submit',
                    handler: function () {
                        cordova.plugin.http.post('http://127.0.0.1:5000/api/register', {
                            username: _this.username,
                            password: _this.password,
                            firstname: _this.firstname,
                            middlename: _this.middlename,
                            lastname: _this.lastname,
                            birthday: _this.birthday,
                            age: _this.age,
                            contact: _this.contact,
                            address: _this.address,
                            prisoner: _this.prisoner
                        }, {
                            "Accept": "application/json",
                            "Content-Type": "application/json; charset=utf-8",
                        }, function (response) {
                            try {
                                response.data = JSON.parse(response.data);
                                // prints test
                                console.log(response.data.message);
                                reg_succ.present();
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */], {}, { animate: true, animation: 'md-transition', direction: 'forward' });
                            }
                            catch (e) {
                                console.error('JSON parsing error');
                            }
                        }, function (response) {
                            // prints 403
                            console.log(response.status);
                            //prints Permission denied
                            console.log(response.error);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    RegisterPage.prototype.backlog = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */], {}, { animate: true, animation: 'md-transition', direction: 'back' });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-registration',template:/*ion-inline-start:"C:\Users\Lee\Desktop\pv\pva\src\pages\registration\registration.html"*/'<ion-header>\n\n    <ion-navbar color="dark">\n\n        <ion-title>Registration</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="signup" padding>\n\n    <h2 padding text-center>Create an account!</h2>\n\n    <form text-center>\n\n        <ion-item class="signup-input">\n\n            <ion-label floating>\n\n                <ion-icon name="ios-contact"></ion-icon> Username</ion-label>\n\n            <ion-input [(ngModel)]="username" name="username" type="text" value=""></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item class="signup-input">\n\n            <ion-label floating>\n\n                <ion-icon name="ios-lock"></ion-icon> Password</ion-label>\n\n            <ion-input [(ngModel)]="password" name="password" type="password" value=""></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item class="signup-input">\n\n            <ion-label floating>\n\n                <ion-icon name="ios-person"></ion-icon> First Name</ion-label>\n\n            <ion-input [(ngModel)]="firstname" name="firstname" type="text" value=""></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item class="signup-input">\n\n            <ion-label floating>\n\n                <ion-icon name="ios-person"></ion-icon> Middle Name</ion-label>\n\n            <ion-input [(ngModel)]="middlename" name="middlename" type="text" value=""></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item class="signup-input">\n\n            <ion-label floating>\n\n                <ion-icon name="ios-person"></ion-icon> Last Name</ion-label>\n\n            <ion-input [(ngModel)]="lastname" name="lastname" type="text" value=""></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item class="signup-input">\n\n            <ion-label floating>\n\n                <ion-icon name="ios-calendar"></ion-icon> Birthday</ion-label>\n\n            <ion-input [(ngModel)]="birthday" name="birthday" type="date" value=""></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item class="signup-input">\n\n            <ion-label floating>\n\n                <ion-icon name="ios-body"></ion-icon> Age</ion-label>\n\n            <ion-input [(ngModel)]="age" name="age" type="number" value=""></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item class="signup-input">\n\n            <ion-label floating>\n\n                <ion-icon name="ios-phone-portrait"></ion-icon> Contact Number</ion-label>\n\n            <ion-input [(ngModel)]="contact" name="contact" type="number" value=""></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item class="signup-input">\n\n            <ion-label floating>\n\n                <ion-icon name="ios-home"></ion-icon> Address</ion-label>\n\n            <ion-input [(ngModel)]="address" name="address" type="text" value=""></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item class="signup-input">\n\n            <ion-label floating>\n\n                <ion-icon name="ios-finger-print"></ion-icon> Prisoner\'s Name</ion-label>\n\n            <ion-input [(ngModel)]="prisoner" name="prisoner" type="text" value=""></ion-input>\n\n        </ion-item>\n\n        <br>\n\n        <br>\n\n        <div class="reg-buttons" text-center>\n\n            <button ion-button round (click)="register()" color="dark">Submit</button>\n\n            <button ion-button round (click)="backlog()" color="dark">Go Back</button>\n\n        </div>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Lee\Desktop\pv\pva\src\pages\registration\registration.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(269);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_visit_visit__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_comment_comment__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_registration_registration__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_information_information__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_expandable_expandable__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic2_super_tabs__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__swimlane_ngx_datatable__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_visit_visit__["a" /* VisitPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_comment_comment__["a" /* CommentPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_registration_registration__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_information_information__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_16__components_expandable_expandable__["a" /* ExpandableComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_19__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_17__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_18_ionic2_super_tabs__["a" /* SuperTabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__mydb',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_visit_visit__["a" /* VisitPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_comment_comment__["a" /* CommentPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_registration_registration__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_information_information__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_16__components_expandable_expandable__["a" /* ExpandableComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__["a" /* HTTP */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, alerts) {
        this.alerts = alerts;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('public_id');
        localStorage.removeItem('role_id');
        localStorage.removeItem('prisoner');
        var alert = this.alerts.create({
            title: 'Logged out',
            message: 'You have successfully logged out!',
            cssClass: 'alertCustomCss',
            buttons: ['OK']
        });
        alert.present();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sidebar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Lee\Desktop\pv\pva\src\app\app.html"*/'\n<ion-menu [content]="sidebar">\n\n    <ion-header>\n        <ion-toolbar  color="dark">\n          <ion-title text-center>Menu</ion-title>\n        </ion-toolbar>\n      </ion-header>\n\n    <ion-content class="menucontent">\n      <ion-list>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <div class="menuButtons" center>\n                <button color="main" menuClose ion-item no-lines style="font-size: 30px;" (click)="logout()"><ion-icon item-start name=\'icon-ai-logout\' style="font-size: 30px;"></ion-icon>Logout</button>\n                <button color="main" menuClose ion-item no-lines style="font-size: 30px;" (click)="about()"><ion-icon item-start name=\'icon-ai-about\' style="font-size: 30px;"></ion-icon> About</button>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  \n  \n  <ion-nav #sidebar [root]="rootPage"></ion-nav>  '/*ion-inline-end:"C:\Users\Lee\Desktop\pv\pva\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoPage = /** @class */ (function () {
    function InfoPage() {
    }
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-information',template:/*ion-inline-start:"C:\Users\Lee\Desktop\pv\pva\src\pages\information\information.html"*/''/*ion-inline-end:"C:\Users\Lee\Desktop\pv\pva\src\pages\information\information.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=information.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpandableComponent = /** @class */ (function () {
    function ExpandableComponent(renderer) {
        this.renderer = renderer;
    }
    ExpandableComponent.prototype.ngAfterViewInit = function () {
        this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', this.expandHeight + 'px');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('expandWrapper', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expandWrapper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('expanded'),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expanded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('expandHeight'),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expandHeight", void 0);
    ExpandableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'expandable',template:/*ion-inline-start:"C:\Users\Lee\Desktop\pv\pva\src\components\expandable\expandable.html"*/'<div #expandWrapper class="expand-wrapper" [class.collapsed]="!expanded">\n\n    <ng-content></ng-content>\n\n</div>'/*ion-inline-end:"C:\Users\Lee\Desktop\pv\pva\src\components\expandable\expandable.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], ExpandableComponent);
    return ExpandableComponent;
}());

//# sourceMappingURL=expandable.js.map

/***/ })

},[261]);
//# sourceMappingURL=main.js.map