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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    HomePage.prototype.goToSlide = function () {
        this.slides.slideTo(2, 500);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Wei Ping\Documents\AngularProjects\giftMe-app\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>  	\n\n    <ion-title>GiftMe</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding> \n\n  \n\n  <h1>Featured Shops</h1>\n\n  <ion-slides pager slidesPerView="3" autoplay="10000" loop>  	\n\n    <ion-slide>      \n\n    	<ion-img width="200" height="120" src="./assets/imgs/shop1-fiona-treadwell-logo.jpg"></ion-img><br>\n\n    	Fiona Treadwell\n\n    	<!-- each image can link to specific shop/ product page-->\n\n    </ion-slide> \n\n\n\n    <ion-slide>  \n\n    	<ion-img width="120" height="120" src="./assets/imgs/shop2-floral-garage-logo.jpg"></ion-img> <br> 	\n\n    	Floral Garage\n\n    </ion-slide> \n\n\n\n    <ion-slide>    \n\n    	<ion-img width="235" height="120" src="./assets/imgs/shop3-angel-florist-logo.png"></ion-img> <br> 	      	\n\n    	Angel Florist\n\n    </ion-slide> \n\n\n\n    <ion-slide>      \n\n    	Shop 4\n\n    </ion-slide> \n\n  </ion-slides>\n\n\n\n  <h1>Featured Products</h1>\n\n  <ion-slides pager autoplay="10000" slidesPerView="3" loop>\n\n    <ion-slide>    \n\n    	<ion-img width="120" height="120" src="./assets/imgs/prdt1-Premium-Freestyle-Bouquet.jpg"></ion-img> <br> 	  \n\n    	Premium Freestyle Bouquet\n\n    </ion-slide> \n\n\n\n    <ion-slide>      \n\n    	<ion-img width="85" height="130" src="./assets/imgs/prdt2-Valentines-Day-bouquet.jpg"></ion-img> <br> 	  \n\n    	Valentine\'s Day Bouquet\n\n    </ion-slide> \n\n\n\n    <ion-slide>      \n\n    	<ion-img width="120" height="120" src="./assets/imgs/prdt3-choco-hamper.png"></ion-img> <br> 	  \n\n    	Chocolate Hamper\n\n    </ion-slide> \n\n\n\n    <ion-slide>      \n\n    	Product 4\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Wei Ping\Documents\AngularProjects\giftMe-app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    function LoginPage(navCtrl, alertCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.submitted = false;
        this.isLogin = false;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        if (sessionStorage.getItem("isLogin") === "true") {
            this.isLogin = true;
        }
        this.firstName = sessionStorage.getItem("firstName");
        this.lastName = sessionStorage.getItem("lastName");
    };
    LoginPage.prototype.clear = function () {
        this.username = "";
        this.password = "";
    };
    LoginPage.prototype.login = function (loginForm) {
        this.submitted = true;
        if (loginForm.valid) {
            if ((this.username == "admin") && (this.password == "password")) {
                if (this.username == "admin") {
                    this.firstName = "Admin";
                }
                this.lastName = "Default";
                this.isLogin = true;
                sessionStorage.setItem("firstName", this.firstName);
                sessionStorage.setItem("lastName", this.lastName);
                sessionStorage.setItem("isLogin", "true");
                //this.productProvider.setLoginCredential(this.username, this.password);
                var toast = this.toastCtrl.create({
                    message: 'Log in Successful. Welcome back ' + this.firstName + ' ' + this.lastName,
                    cssClass: 'toast',
                    duration: 3000
                });
                toast.present();
            }
            else {
                var alert_1 = this.alertCtrl.create({
                    title: 'Login',
                    subTitle: 'Invalid login credential',
                    buttons: ['OK']
                });
                alert_1.present();
            }
        }
        else {
        }
    };
    LoginPage.prototype.logout = function () {
        console.log("Logout");
        //this.navCtrl.popToRoot(); need to figure out how to redirect to homepage directly
        var toast = this.toastCtrl.create({
            message: 'Logout Successful.',
            cssClass: 'toast',
            duration: 3000
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Wei Ping\Documents\AngularProjects\giftMe-app\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>    	\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<div *ngIf="!isLogin">\n\n	\n\n		<h3>Login</h3>\n\n		\n\n		<form #loginForm="ngForm" (ngSubmit)="login(loginForm)" >	\n\n			\n\n			<div>			\n\n				<div *ngIf="inusername.invalid && (inusername.dirty || inusername.touched || submitted)" class="errorText">\n\n					<div *ngIf="inusername.errors.required">\n\n						Username is required.\n\n					</div>\n\n					<div *ngIf="inusername.errors.minlength">\n\n						Username must be at least 4 characters long.\n\n					</div>\n\n					<div *ngIf="inusername.errors.maxlength">\n\n						Username cannot exceed 32 characters.\n\n					</div>\n\n				</div>\n\n				\n\n				<div *ngIf="inpassword.invalid && (inpassword.dirty || inpassword.touched || submitted)" class="errorText">\n\n					<div *ngIf="inpassword.errors.required">\n\n						Password is required.\n\n					</div>\n\n					<div *ngIf="inpassword.errors.minlength">\n\n						Password must be at least 4 characters long.\n\n					</div>\n\n					<div *ngIf="inpassword.errors.maxlength">\n\n						Password cannot exceed 32 characters.\n\n					</div>\n\n				</div>\n\n				\n\n				<div *ngIf="loginErrorMessage" class="errorText">\n\n					{{loginErrorMessage}}\n\n				</div>				\n\n			</div>\n\n\n\n			<ion-list>\n\n				<ion-item>\n\n					<ion-label fixed>Username</ion-label>\n\n					<ion-input type="text" id="username" name="username" [(ngModel)]="username" minlength="4" maxlength="32" required="true" #inusername="ngModel"></ion-input>\n\n				</ion-item>\n\n\n\n				<ion-item>\n\n					<ion-label fixed>Password</ion-label>\n\n					<ion-input type="password" id="password" name="password" [(ngModel)]="password" minlength="4" maxlength="32" required="true" #inpassword="ngModel"></ion-input>\n\n				</ion-item>\n\n				\n\n				<ion-item>					\n\n					<button type="submit" ion-button block>\n\n						Login\n\n					</button>\n\n					<button type="register" ion-button block> <!-- to implement -->\n\n						Sign Up\n\n					</button>					\n\n				</ion-item>\n\n			</ion-list>\n\n\n\n		</form>\n\n	</div>\n\n	\n\n	<div *ngIf="isLogin">\n\n		<h3>Welcome Back!</h3>\n\n		You are login as {{firstName}} {{lastName}}\n\n\n\n		<button ion-button block (click)="logout()">\n\n			Log out\n\n		</button>\n\n	</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Wei Ping\Documents\AngularProjects\giftMe-app\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Wei Ping\Documents\AngularProjects\giftMe-app\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding> \n\n  <p>\n\n    Display all details of user\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Wei Ping\Documents\AngularProjects\giftMe-app\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShopsPage = /** @class */ (function () {
    function ShopsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ShopsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShopsPage');
    };
    ShopsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shops',template:/*ion-inline-start:"C:\Users\Wei Ping\Documents\AngularProjects\giftMe-app\src\pages\shops\shops.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Shops</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<p>\n\n		Allow users to input Postal Code, then display shops based on similar location area.\n\n	</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Wei Ping\Documents\AngularProjects\giftMe-app\src\pages\shops\shops.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ShopsPage);
    return ShopsPage;
}());

//# sourceMappingURL=shops.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductCatPage = /** @class */ (function () {
    function ProductCatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProductCatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductCatPage');
    };
    ProductCatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-cat',template:/*ion-inline-start:"C:\Users\Wei Ping\Documents\AngularProjects\giftMe-app\src\pages\product-cat\product-cat.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Product Category</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<p>\n\n		Page list products 2 by 2 after users select a specific category\n\n	</p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Wei Ping\Documents\AngularProjects\giftMe-app\src\pages\product-cat\product-cat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ProductCatPage);
    return ProductCatPage;
}());

//# sourceMappingURL=product-cat.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingCartPage = /** @class */ (function () {
    function ShoppingCartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ShoppingCartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShoppingCartPage');
    };
    ShoppingCartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shopingCart',template:/*ion-inline-start:"C:\Users\Wei Ping\Documents\AngularProjects\giftMe-app\src\pages\shoppingCart\shoppingCart.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Shopping Cart</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<p>\n\n		Displays items in cart\n\n	</p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Wei Ping\Documents\AngularProjects\giftMe-app\src\pages\shoppingCart\shoppingCart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ShoppingCartPage);
    return ShoppingCartPage;
}());

//# sourceMappingURL=shoppingCart.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_register_register__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_viewTransactions_viewTransactions__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_shops_shops__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_shop_indiv_shop_indiv__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_product_cat_product_cat__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_product_indiv_product_indiv__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_shoppingCart_shoppingCart__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_payment_payment__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_delivery_delivery__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { FormsModule } from '@angular/forms';

















//import { ProductProvider } from '../providers/product/product';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_viewTransactions_viewTransactions__["a" /* ViewTransactionsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_shops_shops__["a" /* ShopsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_shop_indiv_shop_indiv__["a" /* ShopIndivPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_product_cat_product_cat__["a" /* ProductCatPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_product_indiv_product_indiv__["a" /* ProductIndivPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_shoppingCart_shoppingCart__["a" /* ShoppingCartPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_delivery_delivery__["a" /* DeliveryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_viewTransactions_viewTransactions__["a" /* ViewTransactionsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_shops_shops__["a" /* ShopsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_shop_indiv_shop_indiv__["a" /* ShopIndivPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_product_cat_product_cat__["a" /* ProductCatPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_product_indiv_product_indiv__["a" /* ProductIndivPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_shoppingCart_shoppingCart__["a" /* ShoppingCartPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_delivery_delivery__["a" /* DeliveryPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_shops_shops__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_product_cat_product_cat__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_shoppingCart_shoppingCart__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { RegisterPage } from '../pages/register/register';

//import { ViewTransactionsPage } from '../pages/viewTransactions/viewTransactions';

//import { ShopIndivPage } from '../pages/shop-indiv/shop-indiv';

//import { ProductIndivPage } from '../pages/product-indiv/product-indiv';

//import { PaymentPage } from '../pages/payment/payment';
//import { DeliveryPage } from '../pages/delivery/delivery';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */] },
            { title: 'Shops', component: __WEBPACK_IMPORTED_MODULE_7__pages_shops_shops__["a" /* ShopsPage */] },
            { title: 'Products - Category', component: __WEBPACK_IMPORTED_MODULE_8__pages_product_cat_product_cat__["a" /* ProductCatPage */] },
            { title: 'View Shopping Cart', component: __WEBPACK_IMPORTED_MODULE_9__pages_shoppingCart_shoppingCart__["a" /* ShoppingCartPage */] },
            { title: 'Login/Logout', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */] },
            { title: 'Exit', component: null }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        if (page.title == "Exit") {
            this.platform.exitApp();
        }
        else {
            this.nav.setRoot(page.component);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Wei Ping\Documents\AngularProjects\giftMe-app\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Wei Ping\Documents\AngularProjects\giftMe-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Wei Ping\Documents\AngularProjects\giftMe-app\src\pages\register\register.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Register</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<p>\n\n		Key in details to create an account\n\n	</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Wei Ping\Documents\AngularProjects\giftMe-app\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewTransactionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewTransactionsPage = /** @class */ (function () {
    function ViewTransactionsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ViewTransactionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewTransactionsPage');
    };
    ViewTransactionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viewTransactions',template:/*ion-inline-start:"C:\Users\Wei Ping\Documents\AngularProjects\giftMe-app\src\pages\viewTransactions\viewTransactions.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>View All Transactions</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<p>\n\n		Display all past transactions of all enum type\n\n	</p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Wei Ping\Documents\AngularProjects\giftMe-app\src\pages\viewTransactions\viewTransactions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ViewTransactionsPage);
    return ViewTransactionsPage;
}());

//# sourceMappingURL=viewTransactions.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopIndivPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShopIndivPage = /** @class */ (function () {
    function ShopIndivPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ShopIndivPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShopIndivPage');
    };
    ShopIndivPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shop-indiv',template:/*ion-inline-start:"C:\Users\Wei Ping\Documents\AngularProjects\giftMe-app\src\pages\shop-indiv\shop-indiv.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Shop: Individual</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<p>\n\n		Displays products from that particular shop\n\n	</p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Wei Ping\Documents\AngularProjects\giftMe-app\src\pages\shop-indiv\shop-indiv.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ShopIndivPage);
    return ShopIndivPage;
}());

//# sourceMappingURL=shop-indiv.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductIndivPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductIndivPage = /** @class */ (function () {
    function ProductIndivPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProductIndivPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductIndivPage');
    };
    ProductIndivPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-indiv',template:/*ion-inline-start:"C:\Users\Wei Ping\Documents\AngularProjects\giftMe-app\src\pages\product-indiv\product-indiv.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Product: Individual page</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	Page displayed when user selects the picture of a specific product\n\n</ion-content>'/*ion-inline-end:"C:\Users\Wei Ping\Documents\AngularProjects\giftMe-app\src\pages\product-indiv\product-indiv.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ProductIndivPage);
    return ProductIndivPage;
}());

//# sourceMappingURL=product-indiv.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaymentPage = /** @class */ (function () {
    function PaymentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"C:\Users\Wei Ping\Documents\AngularProjects\giftMe-app\src\pages\payment\payment.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Payment</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<p>\n\n		Key in all payment details before selecting delivery time and address\n\n	</p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Wei Ping\Documents\AngularProjects\giftMe-app\src\pages\payment\payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeliveryPage = /** @class */ (function () {
    function DeliveryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DeliveryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DeliveryPage');
    };
    DeliveryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-delivery',template:/*ion-inline-start:"C:\Users\Wei Ping\Documents\AngularProjects\giftMe-app\src\pages\delivery\delivery.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Delivery</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding> \n\n  <p>\n\n    Select Delivery address and timing\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Wei Ping\Documents\AngularProjects\giftMe-app\src\pages\delivery\delivery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], DeliveryPage);
    return DeliveryPage;
}());

//# sourceMappingURL=delivery.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map