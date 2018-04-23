webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration_registration__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(201);
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
            subTitle: 'Username/password is invalid!',
            cssClass: 'alertCustomCss',
            buttons: ['Dismiss']
        });
        cordova.plugin.http.sendRequest('http://127.0.0.1:5000/api/login/', options, function (response) {
            try {
                response.data = JSON.parse(response.data);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('public_id', response.data.public_id);
                localStorage.setItem('role_id', response.data.role_id);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Lee\Desktop\pv\pva\src\pages\login\login.html"*/'<ion-content padding class="login-page">\n\n\n\n  <div text-center>\n\n    <img src="assets/imgs/mob.jpg">\n\n  </div>\n\n\n\n\n\n  <form fixed>\n\n\n\n    <ion-item class="login-input">\n\n      <ion-label floating>\n\n        <ion-icon name="ios-contact"></ion-icon> Username</ion-label>\n\n      <ion-input [(ngModel)]="username" name="username" type="text" value=""></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item class="login-input">\n\n      <ion-label floating>\n\n        <ion-icon name="ios-lock"></ion-icon> Password</ion-label>\n\n      <ion-input [(ngModel)]="password" name="password" type="password" value=""></ion-input>\n\n    </ion-item>\n\n\n\n    <br>\n\n    <br>\n\n    <div>\n\n      <button ion-button block round (click)="login()" color="dark">Sign In</button>\n\n      <p style="text-align: center; ">\n\n        <i>Don\'t have an account?</i>\n\n      </p>\n\n      <button ion-button block round (click)="signup()" color="dark">Sign Up</button>\n\n    </div>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Lee\Desktop\pv\pva\src\pages\login\login.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visit_visit__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__comment_comment__ = __webpack_require__(199);
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
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__visit_visit__["a" /* VisitPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__comment_comment__["a" /* CommentPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Lee\Desktop\pv\pva\src\pages\tabs\tabs.html"*/'<ion-tabs color="dark">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="icon-ai-announce"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Rules" tabIcon="icon-ai-rules"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Visit" tabIcon="icon-ai-prison-visit"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Comments" tabIcon="icon-ai-comments"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Lee\Desktop\pv\pva\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Lee\Desktop\pv\pva\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar color="dark">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>\n      Rules\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Rules and Regulations</h2>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Lee\Desktop\pv\pva\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Lee\Desktop\pv\pva\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="dark">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Announcements</h2>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Lee\Desktop\pv\pva\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
    function VisitPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    VisitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-visit',template:/*ion-inline-start:"C:\Users\Lee\Desktop\pv\pva\src\pages\visit\visit.html"*/'<ion-header>\n  <ion-navbar color="dark">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>\n      Visit\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Schedule a visit</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Lee\Desktop\pv\pva\src\pages\visit\visit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], VisitPage);
    return VisitPage;
}());

//# sourceMappingURL=visit.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
    function CommentPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comment',template:/*ion-inline-start:"C:\Users\Lee\Desktop\pv\pva\src\pages\comment\comment.html"*/'<ion-header>\n\n    <ion-navbar color="dark">\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n      <ion-title>\n\n        Comments\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content>\n\n    <ion-list>\n\n      <ion-list-header>Comment</ion-list-header>\n\n      <ion-item>\n\n        <ion-icon name="ionic" item-start></ion-icon>\n\n        @ionicframework\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\Lee\Desktop\pv\pva\src\pages\comment\comment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], CommentPage);
    return CommentPage;
}());

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(102);
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
        // const options = {
        //     method: 'post',
        //     contentType: 'application/json; charset=utf-8',
        //     data: JSON.stringify({ username: this.username, password: this.password, firstname: this.firstname, middlename: this.middlename, lastname: this.lastname, birthday: this.birthday, age: this.age, contact: this.contact, address: this.address, prisoner: this.prisoner }),
        //     dataType: "json",
        //     crossDomain: true,
        // };
        var _this = this;
        var reg_succ = this.alertCtrl.create({
            title: 'Success',
            subTitle: 'Registered successfully!',
            cssClass: 'alertCustomCss',
            buttons: ['OK']
        });
        cordova.plugin.http.setDataSerializer("json");
        var alert = this.alertCtrl.create({
            title: 'Confirm registration',
            message: 'Do you wish to proceed?',
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registration',template:/*ion-inline-start:"C:\Users\Lee\Desktop\pv\pva\src\pages\registration\registration.html"*/'<ion-header>\n\n    <ion-navbar color="dark">\n\n        <ion-title>Registration</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="signup" padding>\n\n    <h2 padding text-center>Create an account!</h2>\n\n    <form text-center>\n\n        <ion-item class="signup-input">\n\n            <ion-label floating>\n\n                <ion-icon name="ios-contact"></ion-icon> Username</ion-label>\n\n            <ion-input [(ngModel)]="username" name="username" type="text" value=""></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item class="signup-input">\n\n            <ion-label floating>\n\n                <ion-icon name="ios-lock"></ion-icon> Password</ion-label>\n\n            <ion-input [(ngModel)]="password" name="password" type="password" value=""></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item class="signup-input">\n\n            <ion-label floating>\n\n                <ion-icon name="ios-person"></ion-icon> First Name</ion-label>\n\n            <ion-input [(ngModel)]="firstname" name="firstname" type="text" value=""></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item class="signup-input">\n\n            <ion-label floating>\n\n                <ion-icon name="ios-person"></ion-icon> Middle Name</ion-label>\n\n            <ion-input [(ngModel)]="middlename" name="middlename" type="text" value=""></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item class="signup-input">\n\n            <ion-label floating>\n\n                <ion-icon name="ios-person"></ion-icon> Last Name</ion-label>\n\n            <ion-input [(ngModel)]="lastname" name="lastname" type="text" value=""></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item class="signup-input">\n\n            <ion-label floating>\n\n                <ion-icon name="ios-calendar"></ion-icon> Birthday</ion-label>\n\n            <ion-input [(ngModel)]="birthday" name="birthday" type="date" value=""></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item class="signup-input">\n\n            <ion-label floating>\n\n                <ion-icon name="ios-body"></ion-icon> Age</ion-label>\n\n            <ion-input [(ngModel)]="age" name="age" type="number" value=""></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item class="signup-input">\n\n            <ion-label floating>\n\n                <ion-icon name="ios-phone-portrait"></ion-icon> Contact Number</ion-label>\n\n            <ion-input [(ngModel)]="contact" name="contact" type="number" value=""></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item class="signup-input">\n\n            <ion-label floating>\n\n                <ion-icon name="ios-home"></ion-icon> Address</ion-label>\n\n            <ion-input [(ngModel)]="address" name="address" type="text" value=""></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item class="signup-input">\n\n            <ion-label floating>\n\n                <ion-icon name="ios-finger-print"></ion-icon> Prisoner\'s Name</ion-label>\n\n            <ion-input [(ngModel)]="prisoner" name="prisoner" type="text" value=""></ion-input>\n\n        </ion-item>\n\n        <br>\n\n        <br>\n\n        <div class="reg-buttons" text-center>\n\n            <button ion-button round (click)="register()" color="dark">Submit</button>\n\n            <button ion-button round (click)="backlog()" color="dark">Go Back</button>\n\n        </div>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Lee\Desktop\pv\pva\src\pages\registration\registration.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_visit_visit__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_comment_comment__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_registration_registration__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(194);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_visit_visit__["a" /* VisitPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_comment_comment__["a" /* CommentPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_registration_registration__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__mydb',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_visit_visit__["a" /* VisitPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_comment_comment__["a" /* CommentPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_registration_registration__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__["a" /* HTTP */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(101);
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
        var alert = this.alerts.create({
            title: 'Logged out',
            subTitle: 'You have successfully logged out!',
            cssClass: 'alertCustomCss',
            buttons: ['OK']
        });
        alert.present();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('sidebar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Lee\Desktop\pv\pva\src\app\app.html"*/'\n\n<ion-menu [content]="sidebar">\n    <ion-content>\n      <ion-list padding>\n        <button menuClose ion-item (click)="logout()"><ion-icon name=\'exit\'></ion-icon> Logout</button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  \n  \n  <ion-nav #sidebar [root]="rootPage"></ion-nav>  '/*ion-inline-end:"C:\Users\Lee\Desktop\pv\pva\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map