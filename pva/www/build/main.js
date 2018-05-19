webpackJsonp([0],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration_registration__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(241);
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
                localStorage.setItem('accountStatus', response.data.accountStatus);
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Lee\Desktop\pv\pva\src\pages\login\login.html"*/'<ion-content padding class="login-page">\n\n    <br>\n\n    <div text-center>\n\n        <img src="assets/imgs/mob.png">\n\n    </div>\n\n\n\n\n\n    <form fixed>\n\n        <br><br>\n\n        <ion-item no-lines class="login-input">\n\n            <ion-label style="color: #fcec5f; font-size: 20px;">\n\n                <ion-icon name="ios-contact"></ion-icon> Username</ion-label>\n\n            <ion-input [(ngModel)]="username" name="username" type="text" value="" style="color: #fcec5f"></ion-input>\n\n        </ion-item>\n\n        <br>\n\n        <ion-item no-lines class="login-input">\n\n            <ion-label style="color: #fcec5f; font-size: 20px;">\n\n                <ion-icon name="ios-lock"></ion-icon> Password</ion-label>\n\n            <ion-input [(ngModel)]="password" name="password" type="password" value="" style="color: #fcec5f"></ion-input>\n\n        </ion-item>\n\n\n\n        <br>\n\n        <br>\n\n        <div>\n\n            <button ion-button block round (click)="login()" color="dark">Sign In</button>\n\n            <p style="text-align: center; color: #fcec5f; ">\n\n                <i>Don\'t have an account?</i>\n\n            </p>\n\n            <button ion-button block round (click)="signup()" color="dark">Sign Up</button>\n\n        </div>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Lee\Desktop\pv\pva\src\pages\login\login.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 143:
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
webpackEmptyAsyncContext.id = 143;

/***/ }),

/***/ 186:
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
webpackEmptyAsyncContext.id = 186;

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visit_visit__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__comment_comment__ = __webpack_require__(239);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(322);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__announcements_announcements__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_animate__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_service_data_service__ = __webpack_require__(237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http, modalCtrl, myElement, loadingCtrl, alerts) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.myElement = myElement;
        this.loadingCtrl = loadingCtrl;
        this.alerts = alerts;
        this.showButton = false;
        this.slice = 4;
    }
    // presentLoading() {
    //     setTimeout(() => {
    //         loader.dismiss();
    //     }, 5000);
    // }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create({
            content: "Fetching data...",
            spinner: 'dots',
            enableBackdropDismiss: true
            // duration: 5000
        });
        this.loader.present();
        this.http
            .get('http://localhost:5000/api/user/announcements')
            .subscribe(function (data) {
            _this.information = data.announcements;
            _this.datalength = data.announcements.length;
            _this.loader.dismiss();
        });
        this.accountStat = localStorage.getItem('accountStatus');
        var unconfirmed = this.alerts.create({
            title: 'Reminder',
            message: 'This account is still unconfirmed! Some services are disabled until your account is verified. ',
            cssClass: 'alertCustomCss',
            buttons: ['OK, got it!']
        });
        if (this.accountStat == 'false') {
            unconfirmed.present();
        }
    };
    // loadData() {
    //     this.dataService.load()
    //     .then(data => {
    //         this.information = data.announcements;
    //         this.datalength = data.announcements.length;
    //     });
    // }
    HomePage.prototype.onScroll = function (event) {
        this.showButton = true;
    };
    HomePage.prototype.showDetails = function (title, date, content) {
        console.log('shows details');
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__announcements_announcements__["a" /* AnnouncementsContent */], { modalTitle: title, modalDate: date, modalContent: content }, { cssClass: "custom-modal" });
        modal.present();
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            if (_this.datalength >= 5) {
                _this.slice += 4;
                infiniteScroll.complete();
                if (_this.slice > _this.datalength) {
                    infiniteScroll.complete();
                    infiniteScroll.enable(false);
                }
            }
            else {
                infiniteScroll.enable(false);
            }
        }, 200);
    };
    HomePage.prototype.scrollToTop = function () {
        console.log("up we go!");
        this.content.scrollToTop();
        this.showButton = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], HomePage.prototype, "content", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Lee\Desktop\pv\pva\src\pages\home\home.html"*/'<ion-content class="getstart" (ionScroll)="onScroll($event)">\n\n    <br>\n    <br>\n    <h1 padding-top text-center center style="font-size: 45px; margin-bottom: -7px;">Announcements</h1>\n\n    <!-- <button ion-button (click)="toggleVisible()">Toggle it!</button> -->\n\n    <ion-list *ngIf=\'datalength\'>\n        <ion-item class="getend">\n            <ion-card [@flipInX]="flipInX" class="list" *ngFor="let item of information | slice:0:slice;" text-wrap>\n                <ion-card-header text-wrap>\n                    <h2>{{item.title}}</h2>\n                </ion-card-header>\n                <ion-card-content style="margin-top: -20px; margin-bottom: -25px; font-size: 16px;">\n                    Date posted: {{item.date}}\n                </ion-card-content>\n                <button ion-button clear end style="float: right;" (click)="showDetails(item.title, item.date, item.content)">View</button>\n            </ion-card>\n        </ion-item>\n    </ion-list>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content loadingSpinner="circles" distance="1%" loadingText="Loading more data...">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n    <!-- *ngIf="showButton" -->\n    <ion-fab bottom right>\n        <button [@fadeIn]="fadeIn" ion-fab mini color="dark" (click)="scrollToTop()">\n            <ion-icon name="ios-arrow-dropup"></ion-icon>\n        </button>\n    </ion-fab>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Lee\Desktop\pv\pva\src\pages\home\home.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["trigger"])('flipInX', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["transition"])('* => *', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["useAnimation"])(__WEBPACK_IMPORTED_MODULE_5_ng_animate__["flipInX"]))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["trigger"])('fadeIn', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["transition"])('* => *', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["useAnimation"])(__WEBPACK_IMPORTED_MODULE_5_ng_animate__["fadeIn"])),
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__providers_data_service_data_service__["a" /* DataServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementsContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnnouncementsContent = /** @class */ (function () {
    function AnnouncementsContent(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.title = this.navParams.get('modalTitle');
        this.date = this.navParams.get('modalDate');
        this.content = this.navParams.get('modalContent');
    }
    AnnouncementsContent.prototype.ngOnInit = function () {
    };
    AnnouncementsContent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AnnouncementsContent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-announcements',template:/*ion-inline-start:"C:\Users\Lee\Desktop\pv\pva\src\pages\announcements\announcements.html"*/'<ion-toolbar color="dark">\n    <ion-title padding-left>Content</ion-title>\n    <ion-buttons end>\n        <button ion-button padding-right (click)="dismiss()">\n            <ion-icon name="close"></ion-icon>\n        </button>\n    </ion-buttons>\n</ion-toolbar>\n\n\n<ion-content padding class="memes">\n\n    <div class="divider" style="">\n        <h2 padding text-wrap class="title">Title: {{title}}</h2>\n        <h2 padding-left padding-right padding-bottom text-wrap class="date">Posted on: {{date}}</h2>\n        <h3 padding-left padding-right text-wrap class="content">{{content}}</h3>\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Lee\Desktop\pv\pva\src\pages\announcements\announcements.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]])
    ], AnnouncementsContent);
    return AnnouncementsContent;
}());

//# sourceMappingURL=announcements.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataServiceProvider = /** @class */ (function () {
    function DataServiceProvider(http) {
        this.http = http;
        console.log('Hello DataServiceProvider Provider');
    }
    DataServiceProvider.prototype.load = function () {
        var _this = this;
        if (this.information) {
            return Promise.resolve(this.information);
        }
        return new Promise(function (resolve) {
            _this.http
                .get('http://localhost:5000/api/user/announcements')
                .subscribe(function (data) {
                _this.information = data;
                resolve(_this.information);
            });
        });
    };
    DataServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DataServiceProvider);
    return DataServiceProvider;
}());

//# sourceMappingURL=data-service.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(54);
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
        this.accountStat = localStorage.getItem('accountStatus');
        // console.log(this.accountStat);
        this.prisoner = localStorage.getItem('prisoner');
        if (this.accountStat == 'false') {
            this.disableButton = true;
        }
        else {
            this.disableButton = null;
        }
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
            selector: 'page-visit',template:/*ion-inline-start:"C:\Users\Lee\Desktop\pv\pva\src\pages\visit\visit.html"*/'\n\n<ion-content>\n  <br><br>\n  <h1 text-center padding style="font-size: 50px;">Schedule A Visit</h1>\n\n  <h2 text-wrap style="padding-left: 25px; font-size: 22px;">Prisoner Name: {{prisoner}}</h2>\n  <form text-center style="padding: 10px;">\n   \n    <ion-item no-lines class="scheduleVisit">\n      <ion-label>Date of Visit</ion-label>\n      <ion-input [(ngModel)]="date" name="date" type="date" value=""></ion-input>\n    </ion-item>\n\n    <ion-item no-lines class="scheduleVisit">\n      <ion-label>Relationship to Inmate</ion-label>\n      <ion-select [(ngModel)]="relation" name="relation" value="">\n        <ion-option value="Spouse">Spouse</ion-option>\n        <ion-option value="Parent">Parent</ion-option>\n        <ion-option value="Child">Child</ion-option>\n        <ion-option value="Sibling">Sibling</ion-option>\n        <ion-option value="Relative">Relative</ion-option>\n        <ion-option value="Friend">Friend</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-lines class="scheduleVisit">\n      <ion-label>Number of Visitors</ion-label>\n      <ion-select [(ngModel)]="count" name="count" value="">\n        <ion-option value="1">1 (Alone)</ion-option>\n        <ion-option value="2">2</ion-option>\n        <ion-option value="3">3</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-lines class="scheduleVisit">\n        <ion-label>Time</ion-label>\n        <ion-select [(ngModel)]="time" name="time" value="">\n          <ion-option value="8:00 AM">8:00 AM</ion-option>\n          <ion-option value="8:30 AM">8:30 AM</ion-option>\n          <ion-option value="9:00 AM">9:00 AM</ion-option>\n          <ion-option value="9:30 AM">9:30 AM</ion-option>\n          <ion-option value="10:00 AM">10:00 AM</ion-option>\n          <ion-option value="10:30 AM">10:30 AM</ion-option>\n          <ion-option value="11:00 AM">11:00 AM</ion-option>\n          <ion-option value="11:30 AM">11:30 AM</ion-option>\n          <ion-option value="12:00 PM">12:00 PM</ion-option>\n          <ion-option value="12:30 PM">12:30 PM</ion-option>\n          <ion-option value="1:00 PM">1:00 PM</ion-option>\n          <ion-option value="1:30 PM">1:30 PM</ion-option>\n          <ion-option value="2:00 PM">2:00 PM</ion-option>\n          <ion-option value="2:30 PM">2:30 PM</ion-option>\n          <ion-option value="3:00 PM">3:00 PM</ion-option>\n          <ion-option value="3:30 PM">3:30 PM</ion-option>\n          <ion-option value="4:00 PM">4:00 PM</ion-option>\n          <ion-option value="4:30 PM">4:30 PM</ion-option>\n          <ion-option value="5:00 PM">5:00 PM</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <br><button ion-button  style="width: 20rem; border-radius: 10px;" class="scheduleVisit" (click)="schedule()" color="dark" disabled={{disableButton}}>Submit</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Lee\Desktop\pv\pva\src\pages\visit\visit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */]])
    ], VisitPage);
    return VisitPage;
}());

//# sourceMappingURL=visit.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(54);
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
    CommentPage.prototype.ngOnInit = function () {
        this.accountStat = localStorage.getItem('accountStatus');
        if (this.accountStat == 'false') {
            this.disableButton = true;
        }
        else {
            this.disableButton = null;
        }
    };
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
            selector: 'page-comment',template:/*ion-inline-start:"C:\Users\Lee\Desktop\pv\pva\src\pages\comment\comment.html"*/'<ion-content center text-center padding>\n\n    <br>\n\n    <br>\n\n    <h1 style="font-size: 45px;">Comments & Suggestions</h1>\n\n    <h3 padding>Do you have any comments or suggestions? We would love to hear from you!</h3>\n\n    <textarea rows="5" maxLength="750" id="myStuff" [(ngModel)]="myStuff" placeholder="Tap here to type" wrap="hard" onfocus="this.placeholder = \'\'" onblur="this.placeholder = \'Tap here to type\'"></textarea>\n\n\n\n    <br>\n\n    <br>\n\n    <button ion-button style="width: 20rem; border-radius: 10px;" class="comment" (click)="submitComment()" color="dark" onclick="document.getElementById(\'myStuff\').value = \'\'" disabled={{disableButton}} >Submit</button>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Lee\Desktop\pv\pva\src\pages\comment\comment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */]])
    ], CommentPage);
    return CommentPage;
}());

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(54);
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
    RegisterPage.prototype.ngOnInit = function () {
        this.slides.lockSwipes(true);
    };
    RegisterPage.prototype.goToSlide = function () {
        this.slides.lockSwipes(false);
        this.slides.slideTo(1, 500);
        this.slides.lockSwipes(true);
    };
    RegisterPage.prototype.goToSlide2 = function () {
        this.slides.lockSwipes(false);
        this.slides.slideTo(2, 500);
        this.slides.lockSwipes(true);
    };
    RegisterPage.prototype.goBack = function () {
        this.slides.lockSwipes(false);
        this.slides.slidePrev(500);
        this.slides.lockSwipes(true);
    };
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], RegisterPage.prototype, "slides", void 0);
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-registration',template:/*ion-inline-start:"C:\Users\Lee\Desktop\pv\pva\src\pages\registration\registration.html"*/'<ion-content class="signup" padding>\n\n    <h1 padding-top text-center style="color: #fcec5f;font-size: 60px;">Register Here</h1>\n\n    <form text-center>\n\n        <ion-slides>\n\n            <ion-slide>\n\n                <br>\n\n                <div style="background-color: rgba(0,0,0,0.5); border-radius: 10px">\n\n                    <h1 style="color: #fcec5f; font-size: 45px;">Step 1: Account Info</h1>\n\n                </div>\n\n                <br>\n\n                <ion-item no-lines class="signup-input">\n\n                    <ion-label style="color: #fcec5f">\n\n                        <ion-icon name="ios-contact"></ion-icon> Username</ion-label>\n\n                    <ion-input [(ngModel)]="username" name="username" type="text" value=""></ion-input>\n\n                </ion-item>\n\n\n\n                <ion-item no-lines class="signup-input">\n\n                    <ion-label style="color: #fcec5f">\n\n                        <ion-icon name="ios-lock"></ion-icon> Password</ion-label>\n\n                    <ion-input [(ngModel)]="password" name="password" type="password" value=""></ion-input>\n\n                </ion-item>\n\n                <br>\n\n                <div class="reg-buttons" text-center>\n\n                    <button ion-button round (click)="backlog()" color="dark">Go Back</button>\n\n                    <button ion-button round (click)="goToSlide()" color="dark">Next</button>\n\n                </div>\n\n            </ion-slide>\n\n\n\n            <ion-slide>\n\n\n\n                <br>\n\n                <div style="background-color: rgba(0,0,0,0.5); border-radius: 10px">\n\n                    <h1 style="color: #fcec5f; font-size: 45px;">Step 2: Account Details</h1>\n\n                </div>\n\n                <br>\n\n                <ion-item no-lines class="signup-input">\n\n                    <ion-label style="color: #fcec5f">\n\n                        <ion-icon name="ios-person"></ion-icon> First Name</ion-label>\n\n                    <ion-input [(ngModel)]="firstname" name="firstname" type="text" value=""></ion-input>\n\n                </ion-item>\n\n\n\n                <ion-item no-lines class="signup-input">\n\n                    <ion-label style="color: #fcec5f">\n\n                        <ion-icon name="ios-person"></ion-icon> Middle Name</ion-label>\n\n                    <ion-input [(ngModel)]="middlename" name="middlename" type="text" value=""></ion-input>\n\n                </ion-item>\n\n\n\n                <ion-item no-lines class="signup-input">\n\n                    <ion-label style="color: #fcec5f">\n\n                        <ion-icon name="ios-person"></ion-icon> Last Name</ion-label>\n\n                    <ion-input [(ngModel)]="lastname" name="lastname" type="text" value=""></ion-input>\n\n                </ion-item>\n\n                <br>\n\n                <div class="reg-buttons" text-center>\n\n                    <button ion-button round (click)="goBack()" color="dark">Go Back</button>\n\n                    <button ion-button round (click)="goToSlide2()" color="dark">Next</button>\n\n                </div>\n\n            </ion-slide>\n\n\n\n            <ion-slide>\n\n                    <br>\n\n                    <div style="background-color: rgba(0,0,0,0.5); border-radius: 10px">\n\n                        <h1 style="color: #fcec5f; font-size: 45px;">Step 3: Personal Info</h1>\n\n                    </div>\n\n                    <br>\n\n                <ion-item no-lines class="signup-input">\n\n                    <ion-label style="color: #fcec5f">\n\n                        <ion-icon name="calendar"></ion-icon> Birthday</ion-label>\n\n                    <ion-input [(ngModel)]="birthday" name="birthday" type="date" value=""></ion-input>\n\n                </ion-item>\n\n\n\n                <ion-item no-lines class="signup-input">\n\n                    <ion-label style="color: #fcec5f">\n\n                        <ion-icon name="ios-body"></ion-icon> Age</ion-label>\n\n                    <ion-input [(ngModel)]="age" name="age" type="number" value=""></ion-input>\n\n                </ion-item>\n\n\n\n                <ion-item no-lines class="signup-input">\n\n                    <ion-label style="color: #fcec5f">\n\n                        <ion-icon name="phone-portrait"></ion-icon> Contact Number</ion-label>\n\n                    <ion-input [(ngModel)]="contact" name="contact" type="number" value=""></ion-input>\n\n                </ion-item>\n\n\n\n                <ion-item no-lines class="signup-input">\n\n                    <ion-label style="color: #fcec5f">\n\n                        <ion-icon name="ios-home"></ion-icon> Address</ion-label>\n\n                    <ion-input [(ngModel)]="address" name="address" type="text" value=""></ion-input>\n\n                </ion-item>\n\n\n\n                <ion-item no-lines class="signup-input">\n\n                    <ion-label style="color: #fcec5f">\n\n                        <ion-icon name="ios-finger-print"></ion-icon> Prisoner\'s Name</ion-label>\n\n                    <ion-input [(ngModel)]="prisoner" name="prisoner" type="text" value=""></ion-input>\n\n                </ion-item>\n\n                <br>\n\n                <div class="reg-buttons" text-center>\n\n                    <button ion-button round (click)="goBack()" color="dark">Go Back</button>\n\n                    <button ion-button round (click)="backlog()" color="dark">Cancel</button>\n\n                    <button ion-button round (click)="register()" color="dark">Submit</button>\n\n                </div>\n\n\n\n            </ion-slide>\n\n\n\n\n\n        </ion-slides>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Lee\Desktop\pv\pva\src\pages\registration\registration.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
    function InfoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    InfoPage.prototype.dismiss = function () {
        this.navCtrl.pop();
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-information',template:/*ion-inline-start:"C:\Users\Lee\Desktop\pv\pva\src\pages\information\information.html"*/'<ion-toolbar color="dark" padding>\n\n\n\n    <ion-title>About</ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button (click)="dismiss()">\n\n            <ion-icon name="close"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n\n\n</ion-toolbar>\n\n\n\n\n\n\n\n<ion-content padding text-wrap>\n\n\n\n    <br>\n\n    <br>\n\n    <br>\n\n    <ion-list text-wrap class="about-list">\n\n\n\n        <ion-item no-lines>\n\n            <ion-icon name="ionic"></ion-icon>\n\n            <h3>&nbsp;Ionic version: 3.20.0</h3>\n\n        </ion-item>\n\n\n\n        <ion-item no-lines>\n\n            <ion-icon name="contact"></ion-icon>\n\n            <h3>&nbsp;Made by: @CodeTrekkers team</h3>\n\n        </ion-item>\n\n\n\n        <ion-item no-lines>\n\n            <ion-icon name="information-circle"></ion-icon>\n\n            <h3>&nbsp;This mobile app was developed as a companion for the PVA website</h3>\n\n        </ion-item>\n\n\n\n        <ion-item no-lines>\n\n            <ion-icon name="logo-android"></ion-icon>\n\n            <h3>&nbsp;This app is compatible with Android versions 4.4 and above</h3>\n\n        </ion-item>\n\n        \n\n\n\n    </ion-list>\n\n    <br><br><br><br><br><br><br><br><br>\n\n    <footer text-center>&copy; All rights reserved | 2018</footer>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Lee\Desktop\pv\pva\src\pages\information\information.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=information.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_visit_visit__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_comment_comment__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_registration_registration__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_information_information__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_announcements_announcements__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_expandable_expandable__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ionic2_super_tabs__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__swimlane_ngx_datatable__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular_datatables__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_data_service_data_service__ = __webpack_require__(237);
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
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_visit_visit__["a" /* VisitPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_comment_comment__["a" /* CommentPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_registration_registration__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_information_information__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_announcements_announcements__["a" /* AnnouncementsContent */],
                __WEBPACK_IMPORTED_MODULE_18__components_expandable_expandable__["a" /* ExpandableComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_21__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_19__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_23_angular_datatables__["a" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_20_ionic2_super_tabs__["a" /* SuperTabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__mydb',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_visit_visit__["a" /* VisitPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_comment_comment__["a" /* CommentPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_registration_registration__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_information_information__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_announcements_announcements__["a" /* AnnouncementsContent */],
                __WEBPACK_IMPORTED_MODULE_18__components_expandable_expandable__["a" /* ExpandableComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__["a" /* HTTP */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_24__providers_data_service_data_service__["a" /* DataServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_information_information__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_timer__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_timer__);
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
        var _this = this;
        this.alerts = alerts;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        // accountStatus: any;
        // showStat: string;
        this.showSplash = true;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_timer__["timer"])(3000).subscribe(function () { return _this.showSplash = false; });
        });
    }
    MyApp.prototype.ngOnInit = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('public_id');
        localStorage.removeItem('role_id');
        localStorage.removeItem('prisoner');
        localStorage.removeItem('accountStatus');
        //clears unnecessary data on init of app
        // this.accountStatus = localStorage.getItem('accountStatus'); //gets status of account which is important
        // console.log(this.accountStatus);
        // if (this.accountStatus == 'false') {
        //     this.showStat = 'False';
        // } 
        // if (this.accountStatus == 'true') {
        //     this.showStat = 'True';
        // }
    };
    MyApp.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('public_id');
        localStorage.removeItem('role_id');
        localStorage.removeItem('prisoner');
        localStorage.removeItem('accountStatus');
        // localStorage.removeItem('id');
        var alert = this.alerts.create({
            title: 'Logged out',
            message: 'You have successfully logged out!',
            cssClass: 'alertCustomCss',
            buttons: ['OK']
        });
        alert.present();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.about = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_information_information__["a" /* InfoPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sidebar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Lee\Desktop\pv\pva\src\app\app.html"*/'<div *ngIf="showSplash" class="splash">\n    <div class="sk-cube-grid">\n        <div class="sk-cube sk-cube1"></div>\n        <div class="sk-cube sk-cube2"></div>\n        <div class="sk-cube sk-cube3"></div>\n        <div class="sk-cube sk-cube4"></div>\n        <div class="sk-cube sk-cube5"></div>\n        <div class="sk-cube sk-cube6"></div>\n        <div class="sk-cube sk-cube7"></div>\n        <div class="sk-cube sk-cube8"></div>\n        <div class="sk-cube sk-cube9"></div>\n    </div>\n</div>\n\n\n<ion-menu [content]="sidebar">\n\n    <ion-header>\n        <ion-toolbar color="dark">\n            <ion-title text-center>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="menucontent">\n        <ion-list>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <div class="menuButtons" center>\n                            <button color="main" menuClose ion-item no-lines style="font-size: 30px;" (click)="logout()">\n                                <ion-icon item-start name=\'icon-ai-logout\' style="font-size: 30px;"></ion-icon>Logout</button>\n                            <button color="main" menuClose ion-item no-lines style="font-size: 30px;" (click)="about()">\n                                <ion-icon item-start name=\'icon-ai-about\' style="font-size: 30px;"></ion-icon> About</button>\n                            <!-- <h1 ion-item no-lines style="font-size: 30px; background-color: #fcec5f">\n                                <ion-icon item-start name=\'md-person\' style="font-size: 30px;"></ion-icon> Status: {{showStat}}</h1> -->\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n\n<ion-nav #sidebar [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\Lee\Desktop\pv\pva\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 342:
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

},[268]);
//# sourceMappingURL=main.js.map