webpackJsonp([0],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

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

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pegsdk_pegsdk__ = __webpack_require__(197);
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
    function HomePage(navCtrl, pegsdk) {
        this.navCtrl = navCtrl;
        this.pegsdk = pegsdk;
        this.tracker = "9HRHEHH0";
        this.event = {
            latitude: 25.783748,
            longitude: -80.293418,
            mph: 0,
            altitude: 0,
            heading: 0,
            label: "panic",
            use_server_time: true
        };
    }
    HomePage.prototype.login = function () {
        console.log();
        this.pegsdk
            .login(this.tracker)
            .then(function (resp) {
            console.log(resp);
        })
            .catch(console.error);
    };
    HomePage.prototype.sendEvent = function () {
        var _this = this;
        this.pegsdk
            .sendEvent(this.event)
            .then(function (resp) {
            _this.pegsdk.alert
                .create({
                title: "Event Sent Successfully",
                message: JSON.stringify(resp),
                buttons: ["OK"]
            })
                .present();
        })
            .catch(function (err) {
            _this.pegsdk.ErrorDefault(err);
        });
    };
    HomePage.prototype.logout = function () {
        this.pegsdk.logout();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"/Users/hugocarmona/Documents/DCT/PegSDK/SendEvent/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card padding *ngIf="!pegsdk.user; else userCard">\n    <ion-item>\n      <ion-label floating> Tracker </ion-label>\n      <ion-input [(ngModel)]="tracker"></ion-input>\n    </ion-item>\n    <ion-item>\n      <button ion-button (click)="login()" block large> LOGIN </button>\n    </ion-item>\n  </ion-card>\n\n  <ng-template #userCard>\n    <ion-list>\n      <ion-item>\n        <b>name:</b> {{pegsdk.user.name}}\n      </ion-item>\n      <ion-item>\n        <b>tracker:</b> {{pegsdk.user.tracker.token}}\n      </ion-item>\n      <ion-item>\n        <b>site:</b> {{pegsdk.user.tracker.site_url}}\n        <small>({{pegsdk.user.tracker.site_id}})</small>\n      </ion-item>\n      <ion-item>\n        <b>device:</b> {{pegsdk.user.tracker.device}}\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Latitude</ion-label>\n        <ion-input type="number" [(ngModel)]="event.latitude"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Longitude</ion-label>\n        <ion-input type="number" [(ngModel)]="event.longitude"></ion-input>\n\n      </ion-item>\n      <ion-item>\n        <ion-label floating>MPH</ion-label>\n        <ion-input type="number" [(ngModel)]="event.mph"></ion-input>\n\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Altitude</ion-label>\n        <ion-input type="number" [(ngModel)]="event.altitude"></ion-input>\n\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Heading</ion-label>\n        <ion-input type="number" [(ngModel)]="event.heading"></ion-input>\n\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Label</ion-label>\n        <ion-input [(ngModel)]="event.label"></ion-input>\n      </ion-item>\n\n      <button ion-button block (click)="sendEvent()">Send Event</button>\n      <button ion-button block color="danger" (click)="logout()">Logout</button>\n    </ion-list>\n  </ng-template>\n</ion-content>\n'/*ion-inline-end:"/Users/hugocarmona/Documents/DCT/PegSDK/SendEvent/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_pegsdk_pegsdk__["a" /* PegSDK */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_pegsdk_pegsdk__["a" /* PegSDK */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PegSDK; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PegSDK = /** @class */ (function () {
    function PegSDK(http, alert) {
        this.http = http;
        this.alert = alert;
        this.url = "https://api.pegasusgateway.com";
        this.user = null;
        this.token = null;
        this.objects = {};
        console.log("Hello PegsdkProvider Provider");
    }
    PegSDK.prototype.mapCollection = function (array, key) {
        if (key === void 0) { key = "id"; }
        var collection = {};
        array.forEach(function (element) {
            collection[element[key]] = element;
        });
        return collection;
    };
    PegSDK.prototype.logout = function () {
        this.objects = {};
        this.user = null;
        this.token = null;
    };
    PegSDK.prototype.load = function (resource) {
        var _this = this;
        var data;
        var promise = new Promise(function (resolve, reject) {
            if (_this.objects[resource]) {
                return resolve(_this.objects[resource]);
            }
            console.info("loading " + resource);
            _this.get(resource + "?set=500")
                .then(function (resp) {
                if (resource == "user") {
                    data = _this.objects[resource] = resp;
                    resolve(data);
                }
                else {
                    console.log(resp);
                    data = _this.objects[resource] = resp.data;
                    if (resp.pages > 1) {
                        for (var index = 2; index <= resp.pages; index++) {
                            _this.get(resource + "?set=500&page=" + index)
                                .then(function (resp) {
                                _this.objects[resource] = _this.objects[resource].concat(resp.data);
                                if (_this.objects[resource].length == resp.total) {
                                    _this.objects[resource].collection = _this.mapCollection(_this.objects[resource]);
                                    resolve(_this.objects[resource]);
                                }
                            })
                                .catch(function (err) {
                                reject(err);
                            });
                        }
                    }
                    else {
                        _this.objects[resource].collection = _this.mapCollection(_this.objects[resource]);
                        resolve(data);
                    }
                }
            })
                .catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    PegSDK.prototype.get = function (uri) {
        var _this = this;
        var symbol = "?";
        if (uri.indexOf("?") > -1) {
            symbol = "&";
        }
        return new Promise(function (resolve, reject) {
            _this.http.get("https://api.pegasusgateway.com/" + uri + symbol + "tracker=" + _this.token, { headers: _this.headers() }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    PegSDK.prototype.post = function (uri, params) {
        var _this = this;
        var symbol = "?";
        if (uri.indexOf("?") > -1) {
            symbol = "&";
        }
        return new Promise(function (resolve, reject) {
            _this.http
                .post("https://api.pegasusgateway.com/" + uri + symbol + "tracker=" + _this.token, params, { headers: _this.headers() })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    PegSDK.prototype.put = function (uri, params) {
        var _this = this;
        var symbol = "?";
        if (uri.indexOf("?") > -1) {
            symbol = "&";
        }
        return new Promise(function (resolve, reject) {
            _this.http
                .put("https://api.pegasusgateway.com/" + uri + symbol + "tracker=" + _this.token, params, { headers: _this.headers() })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    PegSDK.prototype.delete = function (uri) {
        var _this = this;
        var symbol = "?";
        if (uri.indexOf("?") > -1) {
            symbol = "&";
        }
        return new Promise(function (resolve, reject) {
            _this.http.delete("https://api.pegasusgateway.com/" + uri + symbol + "tracker=" + _this.token, { headers: _this.headers() }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    PegSDK.prototype.login = function (token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get("https://api.pegasusgateway.com/assets/query?tracker=" + token, { headers: _this.headers() }).subscribe(function (data) {
                _this.user = data;
                _this.token = token;
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    PegSDK.prototype.sendEvent = function (eventData) {
        return this.post("assets/event", eventData);
    };
    PegSDK.prototype.headers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("token", this.token);
        return headers;
    };
    PegSDK.prototype.ErrorDefault = function (e, title, message) {
        if (title === void 0) { title = null; }
        if (message === void 0) { message = null; }
        console.error(e);
        if (!title) {
            if (e.status == 500)
                title = "Internal Server Error";
            else if (e.status == 400)
                title = "Bad Request";
            else
                title = e.statusText;
        }
        console.error(e);
        try {
            if (e._body) {
                message = JSON.parse(e._body).message;
            }
        }
        catch (error) {
            message = JSON.stringify(e);
        }
        this.alert
            .create({
            title: title,
            subTitle: e.errorStatus || null,
            message: message,
            buttons: ["OK"]
        })
            .present();
    };
    PegSDK = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], PegSDK);
    return PegSDK;
}());

//# sourceMappingURL=pegsdk.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_pegsdk_pegsdk__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(198);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }), __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */], { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }, __WEBPACK_IMPORTED_MODULE_8__providers_pegsdk_pegsdk__["a" /* PegSDK */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { ListPage } from '../pages/list/list';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: "Home", component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] }
            // { title: 'List', component: ListPage }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/hugocarmona/Documents/DCT/PegSDK/SendEvent/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/hugocarmona/Documents/DCT/PegSDK/SendEvent/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/hugocarmona/Documents/DCT/PegSDK/SendEvent/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/hugocarmona/Documents/DCT/PegSDK/SendEvent/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map