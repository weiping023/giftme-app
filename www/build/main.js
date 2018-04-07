webpackJsonp([2],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductIndivPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-product-indiv',template:/*ion-inline-start:"C:\Users\vanessaloh\Documents\giftme-app\src\pages\product-indiv\product-indiv.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Product: Individual page</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<ion-img width="120" height="120" src="./assets/imgs/shop1-fiona-treadwell-logo.jpg"></ion-img><br>\n\n\n\n	<p>Product Name: </p>\n\n	<p>Product Description: </p>\n\n	<p>Product Price: </p>\n\n	<p>Select Quantity: </p>\n\n\n\n	<button ion-button color="dark">Add to Cart</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\vanessaloh\Documents\giftme-app\src\pages\product-indiv\product-indiv.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProductIndivPage);
    return ProductIndivPage;
}());

//# sourceMappingURL=product-indiv.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, user, toastCtrl) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            phoneNum: '',
            age: ''
        };
    }
    SignupPage.prototype.doSignup = function () {
        var _this = this;
        // Attempt to login in through our User service
        this.user.signup(this.account).subscribe(function (resp) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, function (err) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            // Unable to sign up
            var toast = _this.toastCtrl.create({
                message: _this.signupErrorString,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\vanessaloh\Documents\giftme-app\src\pages\signup\signup.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ \'Sign Up as a new User!\'}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <form (submit)="doSignup()">\n\n    <ion-list>          \n\n\n\n      <ion-item>\n\n        <ion-label floating>{{ \'Email\'}}</ion-label>\n\n        <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>{{ \'Password\' }}</ion-label>\n\n        <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n\n      </ion-item>\n\n\n\n      <h4 align="center">Profile Details</h4>\n\n\n\n      <ion-item>\n\n        <ion-label fixed>{{ \'First Name\'}}</ion-label>\n\n        <ion-input type="text" [(ngModel)]="account.firstname" name="firstName"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label fixed>{{ \'Last Name\'}}</ion-label>\n\n        <ion-input type="text" [(ngModel)]="account.lastname" name="lastName"></ion-input>\n\n      </ion-item>                  \n\n\n\n      <ion-item>\n\n        <ion-label fixed>{{ \'Contact\' }}</ion-label>\n\n        <ion-input type="text" [(ngModel)]="account.phoneNum" name="phoneNum"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label fixed>{{ \'Age\' }}</ion-label>\n\n        <ion-input type="text" [(ngModel)]="account.age" name="age"></ion-input>\n\n      </ion-item>\n\n\n\n      <div padding>\n\n        <button ion-button color="primary" block>{{ \'Sign Up\' }}</button>\n\n      </div>\n\n\n\n    </ion-list>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\vanessaloh\Documents\giftme-app\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/product-indiv/product-indiv.module": [
		291,
		0
	],
	"../pages/signup/signup.module": [
		292,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var User = /** @class */ (function () {
    function User(api) {
        this.api = api;
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    User.prototype.login = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('login', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
            else {
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    User.prototype.signup = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('signup', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this._user = null;
    };
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp.user;
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(116);
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


/**
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = /** @class */ (function () {
    function Api(http) {
        this.http = http;
        this.url = 'https://example.com/api/v1';
    }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(112);
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
        this.email = "";
        this.password = "";
    };
    LoginPage.prototype.login = function (loginForm) {
        this.submitted = true;
        if (loginForm.valid) {
            if ((this.email == "giftmeadmin@gmail.com") && (this.password == "password")) {
                if (this.email == "giftmeadmin@gmail.com") {
                    this.firstName = "Admin";
                }
                this.lastName = "Default";
                this.isLogin = true;
                sessionStorage.setItem("firstName", this.firstName);
                sessionStorage.setItem("lastName", this.lastName);
                sessionStorage.setItem("isLogin", "true");
                //this.productProvider.setLoginCredential(this.email, this.password);
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
        sessionStorage.setItem("isLogin", "false");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        var toast = this.toastCtrl.create({
            message: 'Logout Successful.',
            cssClass: 'toast',
            duration: 3000
        });
        toast.present();
    };
    LoginPage.prototype.register = function () {
        var toast = this.toastCtrl.create({
            message: 'Redirect to Signup.',
            cssClass: 'toast',
            duration: 3000
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\vanessaloh\Documents\giftme-app\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>    	\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<div *ngIf="!isLogin">\n\n	\n\n		<h3>Login</h3>\n\n		\n\n		<form #loginForm="ngForm" (ngSubmit)="login(loginForm)" >	\n\n			\n\n			<div>			\n\n				<div *ngIf="inemail.invalid && (inemail.dirty || inemail.touched || submitted)" class="errorText">\n\n					<div *ngIf="inemail.errors.required">\n\n						Email is required.\n\n					</div>\n\n					<div *ngIf="inemail.errors.minlength">\n\n						Email must be at least 4 characters long.\n\n					</div>\n\n					<div *ngIf="inemail.errors.maxlength">\n\n						email cannot exceed 50 characters.\n\n					</div>\n\n				</div>\n\n				\n\n				<div *ngIf="inpassword.invalid && (inpassword.dirty || inpassword.touched || submitted)" class="errorText">\n\n					<div *ngIf="inpassword.errors.required">\n\n						Password is required.\n\n					</div>\n\n					<div *ngIf="inpassword.errors.minlength">\n\n						Password must be at least 4 characters long.\n\n					</div>\n\n					<div *ngIf="inpassword.errors.maxlength">\n\n						Password cannot exceed 32 characters.\n\n					</div>\n\n				</div>\n\n				\n\n				<div *ngIf="loginErrorMessage" class="errorText">\n\n					{{loginErrorMessage}}\n\n				</div>				\n\n			</div>\n\n\n\n			<ion-list>\n\n				<ion-item>\n\n					<ion-label fixed>Email</ion-label>\n\n					<ion-input type="email" id="email" name="email" [(ngModel)]="email" minlength="4" maxlength="32" required="true" #inemail="ngModel"></ion-input>\n\n				</ion-item>\n\n\n\n				<ion-item>\n\n					<ion-label fixed>Password</ion-label>\n\n					<ion-input type="password" id="password" name="password" [(ngModel)]="password" minlength="4" maxlength="32" required="true" #inpassword="ngModel"></ion-input>\n\n				</ion-item>\n\n				\n\n				<ion-item>					\n\n					<button type="submit" ion-button block>\n\n						Login\n\n					</button>\n\n					<button ion-button block (click)="register()"> \n\n						Sign Up\n\n					</button>					\n\n				</ion-item>\n\n			</ion-list>\n\n\n\n		</form>\n\n	</div>\n\n	\n\n	<div *ngIf="isLogin">\n\n		<h3>Welcome Back!</h3>\n\n		You are login as {{firstName}} {{lastName}}\n\n\n\n		<button ion-button block (click)="logout()">\n\n			Log out\n\n		</button>\n\n	</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\vanessaloh\Documents\giftme-app\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\vanessaloh\Documents\giftme-app\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>       \n\n    <ion-title>Profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding> \n\n\n\n  <div *ngIf="!isUpdated">\n\n    <h3>Profile</h3>\n\n    <form #updateProfileForm="ngForm" (ngSubmit)="updateProfile(updateProfileForm)">\n\n      <div>\n\n        <div *ngIf="(infirstname.dirty || infirstname.touched || submitted)" class="errorText">\n\n          <div *ngIf="infirstname.errors.minlength">\n\n            First Name must be at least 3 characters long.\n\n          </div>\n\n          <div *ngIf="infirstname.errors.maxlength">\n\n            First Name cannot exceed 32 characters.\n\n          </div>\n\n        </div>\n\n\n\n        <div *ngIf="(inlastname.dirty || inlastname.touched || submitted)" class="errorText">\n\n          <div *ngIf="inlastname.errors.minlength">\n\n            Last Name must be at least 3 characters long.\n\n          </div>\n\n          <div *ngIf="inlastname.errors.maxlength">\n\n            Last Name cannot exceed 32 characters.\n\n          </div>\n\n        </div>\n\n\n\n        <div *ngIf="(inmobilenum.dirty || inmobilenum.touched || submitted)" class="errorText">\n\n          <div *ngIf="inmobilenum.errors.exactlength">\n\n            Mobile number must be 8 characters long.\n\n          </div>\n\n        </div>\n\n\n\n        <div *ngIf="incurrpassword.invalid && (incurrpassword.dirty || incurrpassword.touched || submitted)" class="errorText">\n\n          <div *ngIf="incurrpassword.errors.required">\n\n            Password is required.\n\n          </div>\n\n          <div *ngIf="incurrpassword.errors.minlength">\n\n            Password must be at least 4 characters long.\n\n          </div>\n\n          <div *ngIf="incurrpassword.errors.maxlength">\n\n            Password cannot exceed 32 characters.\n\n          </div>\n\n        </div>\n\n\n\n        <div *ngIf="innewpassword.invalid && (innewpassword.dirty || innewpassword.touched || submitted)" class="errorText">\n\n          <div *ngIf="innewpassword.errors.required">\n\n            Password is required.\n\n          </div>\n\n          <div *ngIf="innewpassword.errors.minlength">\n\n            Password must be at least 4 characters long.\n\n          </div>\n\n          <div *ngIf="innewpassword.errors.maxlength">\n\n            Password cannot exceed 32 characters.\n\n          </div>\n\n        </div>\n\n\n\n        <div *ngIf="inverifypassword.invalid && (inverifypassword.dirty || inverifypassword.touched || submitted)" class="errorText">\n\n          <div *ngIf="inverifypassword.errors.required">\n\n            Password is required.\n\n          </div>\n\n          <div *ngIf="inverifypassword.errors.minlength">\n\n            Password must be at least 4 characters long.\n\n          </div>\n\n          <div *ngIf="inverifypassword.errors.maxlength">\n\n            Password cannot exceed 32 characters.\n\n          </div>\n\n        </div>\n\n\n\n        <div *ngIf="updateProfileErrorMessage" class="errorText">\n\n          {{updateProfileErrorMessage}}\n\n        </div>\n\n      </div>\n\n\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label fixed>First Name</ion-label>\n\n          <ion-input type="text" placeholder ="GiftMe" id="firstname" name="firstname" [(ngModel)]="firstname" minlength="3" maxlength="32" required="false" #infirstname="ngModel">\n\n          </ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label fixed>Last Name</ion-label>\n\n          <ion-input type="text" placeholder ="Admin" id="lastname" name="lastname" [(ngModel)]="lastname" minlength="3" maxlength="32" required="false" #inlastname="ngModel">\n\n          </ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label fixed>Contact</ion-label>\n\n          <ion-input type="text" placeholder ="12345678" id="mobilenum" name="mobilenum" [(ngModel)]="mobilenum" exactlength="8" required="false" #inmobilenum="ngModel">\n\n          </ion-input>\n\n        </ion-item>\n\n\n\n        <h4>Password</h4>\n\n\n\n        <ion-item>\n\n          <ion-label fixed>Current</ion-label>\n\n          <ion-input type="password" id="currpassword" name="currpassword" [(ngModel)]="currpassword" minlength="4" maxlength="32" required="false" #incurrpassword="ngModel"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label fixed>New</ion-label>\n\n          <ion-input type="password" id="newpassword" name="newpassword" [(ngModel)]="newpassword" minlength="4" maxlength="32" required="false" #innewpassword="ngModel"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label fixed>Verify</ion-label>\n\n          <ion-input type="password" id="verifypassword" name="verifypassword" [(ngModel)]="verifypassword" minlength="4" maxlength="32" required="false" #inverifypassword="ngModel"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n    </form>\n\n  </div>\n\n  <button ion-button clear>Save Changes</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\vanessaloh\Documents\giftme-app\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-shops',template:/*ion-inline-start:"C:\Users\vanessaloh\Documents\giftme-app\src\pages\shops\shops.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>  	 	\n\n    <ion-title>Shops</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<p>\n\n		Allow users to input Postal Code, then display shops based on similar location area.\n\n	</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\vanessaloh\Documents\giftme-app\src\pages\shops\shops.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ShopsPage);
    return ShopsPage;
}());

//# sourceMappingURL=shops.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-shopingCart',template:/*ion-inline-start:"C:\Users\vanessaloh\Documents\giftme-app\src\pages\shoppingCart\shoppingCart.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>  	  	\n\n    <ion-title>Shopping Cart</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<p>\n\n		Displays items in cart\n\n	</p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\vanessaloh\Documents\giftme-app\src\pages\shoppingCart\shoppingCart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ShoppingCartPage);
    return ShoppingCartPage;
}());

//# sourceMappingURL=shoppingCart.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_side_menu_redirect_events__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Angular
 // tslint:disable-line
// Ionic


var InnerMenuOptionModel = /** @class */ (function () {
    function InnerMenuOptionModel() {
    }
    InnerMenuOptionModel.fromMenuOptionModel = function (option, parent) {
        var innerMenuOptionModel = new InnerMenuOptionModel();
        innerMenuOptionModel.id = this.counter++;
        innerMenuOptionModel.iconName = option.iconName;
        innerMenuOptionModel.displayName = option.displayName;
        innerMenuOptionModel.badge = option.badge;
        innerMenuOptionModel.targetOption = option;
        innerMenuOptionModel.parent = parent || null;
        innerMenuOptionModel.selected = option.selected;
        if (option.subItems) {
            innerMenuOptionModel.expanded = false;
            innerMenuOptionModel.subItemsCount = option.subItems.length;
            innerMenuOptionModel.subOptions = [];
            option.subItems.forEach(function (subItem) {
                var innerSubItem = InnerMenuOptionModel.fromMenuOptionModel(subItem, innerMenuOptionModel);
                innerMenuOptionModel.subOptions.push(innerSubItem);
                // Select the parent if any
                // child option is selected
                if (subItem.selected) {
                    innerSubItem.parent.selected = true;
                    innerSubItem.parent.expanded = true;
                }
            });
        }
        return innerMenuOptionModel;
    };
    InnerMenuOptionModel.counter = 1;
    return InnerMenuOptionModel;
}());
var SideMenuContentComponent = /** @class */ (function () {
    function SideMenuContentComponent(platform, eventsCtrl, cdRef) {
        var _this = this;
        this.platform = platform;
        this.eventsCtrl = eventsCtrl;
        this.cdRef = cdRef;
        this.collapsableItems = [];
        // Outputs: return the selected option to the caller
        this.selectOption = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        // Handle the redirect event
        this.eventsCtrl.subscribe(__WEBPACK_IMPORTED_MODULE_2__models_side_menu_redirect_events__["a" /* SideMenuRedirectEvent */], function (data) {
            _this.updateSelectedOption(data);
        });
    }
    Object.defineProperty(SideMenuContentComponent.prototype, "options", {
        set: function (value) {
            var _this = this;
            if (value) {
                // Keep a reference to the options
                // sent to this component
                this.menuOptions = value;
                this.collapsableItems = new Array();
                // Map the options to our internal models
                this.menuOptions.forEach(function (option) {
                    var innerMenuOption = InnerMenuOptionModel.fromMenuOptionModel(option);
                    _this.collapsableItems.push(innerMenuOption);
                    // Check if there's any option marked as selected
                    if (option.selected) {
                        _this.selectedOption = innerMenuOption;
                    }
                    else if (innerMenuOption.subItemsCount) {
                        innerMenuOption.subOptions.forEach(function (subItem) {
                            if (subItem.selected) {
                                _this.selectedOption = subItem;
                            }
                        });
                    }
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SideMenuContentComponent.prototype, "settings", {
        set: function (value) {
            if (value) {
                this.menuSettings = value;
                this.mergeSettings();
            }
        },
        enumerable: true,
        configurable: true
    });
    SideMenuContentComponent.prototype.ngOnDestroy = function () {
        this.eventsCtrl.unsubscribe(__WEBPACK_IMPORTED_MODULE_2__models_side_menu_redirect_events__["a" /* SideMenuRedirectEvent */]);
    };
    // ---------------------------------------------------
    // PUBLIC methods
    // ---------------------------------------------------
    // Send the selected option to the caller component
    SideMenuContentComponent.prototype.select = function (option) {
        if (this.menuSettings.showSelectedOption) {
            this.setSelectedOption(option);
        }
        // Return the selected option (not our inner option)
        this.selectOption.emit(option.targetOption);
    };
    // Toggle the sub options of the selected item
    SideMenuContentComponent.prototype.toggleItemOptions = function (targetOption) {
        if (!targetOption)
            return;
        // If the accordion mode is set to true, we need
        // to collapse all the other menu options
        if (this.menuSettings.accordionMode) {
            this.collapsableItems.forEach(function (option) {
                if (option.id !== targetOption.id) {
                    option.expanded = false;
                }
            });
        }
        // Toggle the selected option
        targetOption.expanded = !targetOption.expanded;
    };
    // Reset the entire menu
    SideMenuContentComponent.prototype.collapseAllOptions = function () {
        this.collapsableItems.forEach(function (option) {
            if (!option.selected) {
                option.expanded = false;
            }
            if (option.subItemsCount) {
                option.subOptions.forEach(function (subItem) {
                    if (subItem.selected) {
                        // Expand the parent if any of
                        // its childs is selected
                        subItem.parent.expanded = true;
                    }
                });
            }
        });
        // Update the view since there wasn't
        // any user interaction with it
        this.cdRef.detectChanges();
    };
    Object.defineProperty(SideMenuContentComponent.prototype, "subOptionIndentation", {
        // Get the proper indentation of each option
        get: function () {
            if (this.platform.is('ios'))
                return this.menuSettings.subOptionIndentation.ios;
            if (this.platform.is('windows'))
                return this.menuSettings.subOptionIndentation.wp;
            return this.menuSettings.subOptionIndentation.md;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SideMenuContentComponent.prototype, "itemHeight", {
        // Get the proper height of each option
        get: function () {
            if (this.platform.is('ios'))
                return this.menuSettings.itemHeight.ios;
            if (this.platform.is('windows'))
                return this.menuSettings.itemHeight.wp;
            return this.menuSettings.itemHeight.md;
        },
        enumerable: true,
        configurable: true
    });
    // ---------------------------------------------------
    // PRIVATE methods
    // ---------------------------------------------------
    // Method that set the selected option and its parent
    SideMenuContentComponent.prototype.setSelectedOption = function (option) {
        if (!option.targetOption.component)
            return;
        // Clean the current selected option if any
        if (this.selectedOption) {
            this.selectedOption.selected = false;
            this.selectedOption.targetOption.selected = false;
            if (this.selectedOption.parent) {
                this.selectedOption.parent.selected = false;
                this.selectedOption.parent.expanded = false;
            }
            this.selectedOption = null;
        }
        // Set this option to be the selected
        option.selected = true;
        option.targetOption.selected = true;
        if (option.parent) {
            option.parent.selected = true;
            option.parent.expanded = true;
        }
        // Keep a reference to the selected option
        this.selectedOption = option;
        // Update the view if needed since we may have
        // expanded or collapsed some options
        this.cdRef.detectChanges();
    };
    // Update the selected option
    SideMenuContentComponent.prototype.updateSelectedOption = function (data) {
        if (!data.displayName) {
            return;
        }
        var targetOption;
        this.collapsableItems.forEach(function (option) {
            if (option.displayName.toLowerCase() === data.displayName.toLowerCase()) {
                targetOption = option;
            }
            else if (option.subItemsCount) {
                option.subOptions.forEach(function (subOption) {
                    if (subOption.displayName.toLowerCase() === data.displayName.toLowerCase()) {
                        targetOption = subOption;
                    }
                });
            }
        });
        if (targetOption) {
            this.setSelectedOption(targetOption);
        }
    };
    // Merge the settings received with the default settings
    SideMenuContentComponent.prototype.mergeSettings = function () {
        var defaultSettings = {
            accordionMode: false,
            itemHeight: {
                ios: 50,
                md: 50,
                wp: 50
            },
            arrowIcon: 'ios-arrow-down',
            showSelectedOption: false,
            selectedOptionClass: 'selected-option',
            indentSubOptionsWithoutIcons: false,
            subOptionIndentation: {
                ios: '16px',
                md: '16px',
                wp: '16px'
            }
        };
        if (!this.menuSettings) {
            // Use the default values
            this.menuSettings = defaultSettings;
            return;
        }
        if (!this.menuSettings.itemHeight) {
            this.menuSettings.itemHeight = defaultSettings.itemHeight;
        }
        else {
            this.menuSettings.itemHeight.ios = this.isDefinedAndPositive(this.menuSettings.itemHeight.ios) ? this.menuSettings.itemHeight.ios : defaultSettings.itemHeight.ios;
            this.menuSettings.itemHeight.md = this.isDefinedAndPositive(this.menuSettings.itemHeight.md) ? this.menuSettings.itemHeight.md : defaultSettings.itemHeight.md;
            this.menuSettings.itemHeight.wp = this.isDefinedAndPositive(this.menuSettings.itemHeight.wp) ? this.menuSettings.itemHeight.wp : defaultSettings.itemHeight.wp;
        }
        this.menuSettings.showSelectedOption = this.isDefined(this.menuSettings.showSelectedOption) ? this.menuSettings.showSelectedOption : defaultSettings.showSelectedOption;
        this.menuSettings.accordionMode = this.isDefined(this.menuSettings.accordionMode) ? this.menuSettings.accordionMode : defaultSettings.accordionMode;
        this.menuSettings.arrowIcon = this.isDefined(this.menuSettings.arrowIcon) ? this.menuSettings.arrowIcon : defaultSettings.arrowIcon;
        this.menuSettings.selectedOptionClass = this.isDefined(this.menuSettings.selectedOptionClass) ? this.menuSettings.selectedOptionClass : defaultSettings.selectedOptionClass;
        this.menuSettings.subOptionIndentation = this.isDefined(this.menuSettings.subOptionIndentation) ? this.menuSettings.subOptionIndentation : defaultSettings.subOptionIndentation;
        this.menuSettings.indentSubOptionsWithoutIcons = this.isDefined(this.menuSettings.indentSubOptionsWithoutIcons) ? this.menuSettings.indentSubOptionsWithoutIcons : defaultSettings.indentSubOptionsWithoutIcons;
        if (!this.menuSettings.subOptionIndentation) {
            this.menuSettings.subOptionIndentation = defaultSettings.subOptionIndentation;
        }
        else {
            this.menuSettings.subOptionIndentation.ios = this.isDefined(this.menuSettings.subOptionIndentation.ios) ? this.menuSettings.subOptionIndentation.ios : defaultSettings.subOptionIndentation.ios;
            this.menuSettings.subOptionIndentation.md = this.isDefined(this.menuSettings.subOptionIndentation.md) ? this.menuSettings.subOptionIndentation.md : defaultSettings.subOptionIndentation.md;
            this.menuSettings.subOptionIndentation.wp = this.isDefined(this.menuSettings.subOptionIndentation.wp) ? this.menuSettings.subOptionIndentation.wp : defaultSettings.subOptionIndentation.wp;
        }
    };
    SideMenuContentComponent.prototype.isDefined = function (property) {
        return property !== null && property !== undefined;
    };
    SideMenuContentComponent.prototype.isDefinedAndPositive = function (property) {
        return this.isDefined(property) && !isNaN(property) && property > 0;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('options'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], SideMenuContentComponent.prototype, "options", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('settings'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SideMenuContentComponent.prototype, "settings", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SideMenuContentComponent.prototype, "selectOption", void 0);
    SideMenuContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'side-menu-content',template:/*ion-inline-start:"C:\Users\vanessaloh\Documents\giftme-app\src\pages\side-menu-content\side-menu-content.component.html"*/'<ion-list no-margin no-lines>\n\n    <ng-template ngFor let-option [ngForOf]="collapsableItems" let-i="index">\n\n\n\n        <!-- It is a simple option -->\n\n        <ng-template [ngIf]="!option.subItemsCount">\n\n            <ion-item class="option" [ngClass]="menuSettings?.showSelectedOption && option.selected ? menuSettings.selectedOptionClass : null" (tap)="select(option)" tappable>\n\n                <ion-icon *ngIf="option.iconName" [name]="option.iconName" item-left></ion-icon>\n\n                {{ option.displayName }} <ion-badge item-right *ngIf="option.badge | async as badgeNo">{{ badgeNo }}</ion-badge>\n\n            </ion-item>\n\n        </ng-template>\n\n\n\n        <!-- It has nested options -->\n\n        <ng-template [ngIf]="option.subItemsCount">\n\n\n\n            <ion-list no-margin class="accordion-menu">\n\n\n\n                <!-- Header -->\n\n                <ion-item class="header" [ngClass]="menuSettings?.showSelectedOption && option.selected ? menuSettings.selectedOptionClass : null" (tap)="toggleItemOptions(option)" tappable>\n\n                    <ion-icon [class.rotate]="option.expanded" class="header-icon" [name]="option.iconName || menuSettings.arrowIcon" item-left></ion-icon>\n\n                    {{ option.displayName }}\n\n                </ion-item>\n\n\n\n                <!-- Sub items -->\n\n                <div [style.height]="option.expanded ? ((itemHeight + 1) * option.subItemsCount) + \'px\' : \'0px\'" class="options">\n\n                    <ng-template ngFor let-item [ngForOf]="option.subOptions">\n\n                        <ion-item class="sub-option" [style.padding-left]="subOptionIndentation" [class.no-icon]="menuSettings?.indentSubOptionsWithoutIcons && !item.iconName" [ngClass]="menuSettings?.showSelectedOption && item.selected ? menuSettings.selectedOptionClass : null" tappable (tap)="select(item)">\n\n                            <ion-icon *ngIf="item.iconName" [name]="item.iconName" item-left></ion-icon>\n\n                            {{ item.displayName }}  <ion-badge item-right *ngIf="item.badge | async as badgeNo">{{ badgeNo }}</ion-badge>\n\n                        </ion-item>\n\n                    </ng-template>\n\n                </div>\n\n            </ion-list>\n\n\n\n        </ng-template>\n\n\n\n    </ng-template>\n\n</ion-list>'/*ion-inline-end:"C:\Users\vanessaloh\Documents\giftme-app\src\pages\side-menu-content\side-menu-content.component.html"*/,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], SideMenuContentComponent);
    return SideMenuContentComponent;
}());

//# sourceMappingURL=side-menu-content.component.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(241);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_viewTransactions_viewTransactions__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_shops_shops__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_shop_indiv_shop_indiv__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_product_cat_product_cat__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_product_indiv_product_indiv__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_shoppingCart_shoppingCart__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_payment_payment__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_delivery_delivery__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_user_user__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_api_api__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_side_menu_content_side_menu_content_component__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { FormsModule } from '@angular/forms';


















//import { ProductProvider } from '../providers/product/product';


// Custom components

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_viewTransactions_viewTransactions__["a" /* ViewTransactionsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_shops_shops__["a" /* ShopsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_shop_indiv_shop_indiv__["a" /* ShopIndivPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_product_cat_product_cat__["a" /* ProductCatPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_product_indiv_product_indiv__["a" /* ProductIndivPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_shoppingCart_shoppingCart__["a" /* ShoppingCartPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_delivery_delivery__["a" /* DeliveryPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_side_menu_content_side_menu_content_component__["a" /* SideMenuContentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/product-indiv/product-indiv.module#ProductIndivPageModule', name: 'ProductIndivPage', segment: 'product-indiv', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
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
                //{provide: ErrorHandler, useClass: IonicErrorHandler},
                //ProductProvider,
                __WEBPACK_IMPORTED_MODULE_19__providers_user_user__["a" /* User */],
                __WEBPACK_IMPORTED_MODULE_20__providers_api_api__["a" /* Api */]
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_shops_shops__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_product_indiv_product_indiv__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_shoppingCart_shoppingCart__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_side_menu_content_side_menu_content_component__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Angular

//Ionic




//Pages



//import { ViewTransactionsPage } from '../pages/viewTransactions/viewTransactions';



//import { PaymentPage } from '../pages/payment/payment';
//import { DeliveryPage } from '../pages/delivery/delivery';
//Side Menu Component

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, alertCtrl, menuCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        // Settings for the SideMenuComponent
        this.sideMenuSettings = {
            accordionMode: true,
            showSelectedOption: true,
            selectedOptionClass: 'active-side-menu-option',
            subOptionIndentation: {
                md: '56px',
                ios: '64px',
                wp: '56px'
            }
        };
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            // Initialize some options
            _this.initializeOptions();
        });
    };
    MyApp.prototype.initializeOptions = function () {
        this.options = new Array();
        // Load simple menu options
        // ------------------------------------------
        this.options.push({
            iconName: 'home',
            displayName: 'Home',
            component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            // This option is already selected
            selected: true
        });
        this.options.push({
            iconName: 'person',
            displayName: 'Profile',
            component: __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */]
        });
        // Load options with nested items
        // -----------------------------------------------
        this.options.push({
            displayName: 'Product',
            subItems: [
                {
                    iconName: 'flower',
                    displayName: 'Flowers',
                    component: __WEBPACK_IMPORTED_MODULE_8__pages_product_indiv_product_indiv__["a" /* ProductIndivPage */] //to replace
                },
                {
                    iconName: 'basket',
                    displayName: 'Confectionery',
                    component: __WEBPACK_IMPORTED_MODULE_8__pages_product_indiv_product_indiv__["a" /* ProductIndivPage */] //to replace
                },
                {
                    iconName: 'basket',
                    displayName: 'Plushies',
                    component: __WEBPACK_IMPORTED_MODULE_8__pages_product_indiv_product_indiv__["a" /* ProductIndivPage */] //to replace
                }
            ]
        });
        this.options.push({
            displayName: 'Shop',
            subItems: [
                {
                    iconName: 'pin',
                    displayName: 'Location',
                    component: __WEBPACK_IMPORTED_MODULE_7__pages_shops_shops__["a" /* ShopsPage */]
                }
            ]
        });
        this.options.push({
            iconName: 'cart',
            displayName: 'Shopping Cart',
            component: __WEBPACK_IMPORTED_MODULE_9__pages_shoppingCart_shoppingCart__["a" /* ShoppingCartPage */]
        });
        // Load special options
        // -----------------------------------------------
        this.options.push({
            iconName: 'log-in',
            displayName: 'Login/ Logout',
            component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]
        });
        this.options.push({
            iconName: 'exit',
            displayName: 'Exit',
            custom: {
                isExit: true
            }
        });
    };
    MyApp.prototype.selectOption = function (option) {
        var _this = this;
        this.menuCtrl.close().then(function () {
            if (option.custom && option.custom.isExit) {
                _this.platform.exitApp();
            }
            else {
                // Redirect to the selected page
                _this.navCtrl.setRoot(option.component);
            }
        });
    };
    MyApp.prototype.collapseMenuOptions = function () {
        // Collapse all the options
        this.sideMenu.collapseAllOptions();
    };
    MyApp.prototype.presentAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Information',
            message: message,
            buttons: ['Ok']
        });
        alert.present();
    };
    MyApp.prototype.openPage = function (page) {
        if (page.title == "Exit") {
            this.platform.exitApp();
        }
        else {
            this.navCtrl.setRoot(page.component);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_10__pages_side_menu_content_side_menu_content_component__["a" /* SideMenuContentComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_10__pages_side_menu_content_side_menu_content_component__["a" /* SideMenuContentComponent */])
    ], MyApp.prototype, "sideMenu", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\vanessaloh\Documents\giftme-app\src\app\app.html"*/'<ion-menu [content]="content" (ionClose)="collapseMenuOptions()">\n\n  <ion-header>\n\n    <ion-toolbar color="secondary">\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n\n\n    <!-- Side Menu -->    \n\n    <side-menu-content [settings]="sideMenuSettings" [options]="options" (selectOption)="selectOption($event)"></side-menu-content>\n\n    \n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\vanessaloh\Documents\giftme-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuRedirectEvent; });
// SideMenuRedirectEvent constant
var SideMenuRedirectEvent = 'sidemenu:redirect';
//# sourceMappingURL=side-menu-redirect-events.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewTransactionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-viewTransactions',template:/*ion-inline-start:"C:\Users\vanessaloh\Documents\giftme-app\src\pages\viewTransactions\viewTransactions.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>View All Transactions</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<p>\n\n		Display all past transactions of all enum type\n\n	</p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\vanessaloh\Documents\giftme-app\src\pages\viewTransactions\viewTransactions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ViewTransactionsPage);
    return ViewTransactionsPage;
}());

//# sourceMappingURL=viewTransactions.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopIndivPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-shop-indiv',template:/*ion-inline-start:"C:\Users\vanessaloh\Documents\giftme-app\src\pages\shop-indiv\shop-indiv.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Shop: Individual</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<p>\n\n		Displays products from that particular shop\n\n	</p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\vanessaloh\Documents\giftme-app\src\pages\shop-indiv\shop-indiv.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ShopIndivPage);
    return ShopIndivPage;
}());

//# sourceMappingURL=shop-indiv.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-product-cat',template:/*ion-inline-start:"C:\Users\vanessaloh\Documents\giftme-app\src\pages\product-cat\product-cat.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>  	  	\n\n    <ion-title>Product Category</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<p>\n\n		Page list products 2 by 2 after users select a specific category\n\n	</p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\vanessaloh\Documents\giftme-app\src\pages\product-cat\product-cat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProductCatPage);
    return ProductCatPage;
}());

//# sourceMappingURL=product-cat.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"C:\Users\vanessaloh\Documents\giftme-app\src\pages\payment\payment.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>  	  	\n\n    <ion-title>Payment</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<p>\n\n		Key in all payment details before selecting delivery time and address\n\n	</p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\vanessaloh\Documents\giftme-app\src\pages\payment\payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-delivery',template:/*ion-inline-start:"C:\Users\vanessaloh\Documents\giftme-app\src\pages\delivery\delivery.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Delivery</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding> \n\n  <p>\n\n    Select Delivery address and timing\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\vanessaloh\Documents\giftme-app\src\pages\delivery\delivery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DeliveryPage);
    return DeliveryPage;
}());

//# sourceMappingURL=delivery.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\vanessaloh\Documents\giftme-app\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>  	\n\n    <ion-title>GiftMe</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding> \n\n  \n\n  <h1>Featured Shops</h1>\n\n  <ion-slides pager slidesPerView="2" autoplay="10000" loop>  	\n\n    <ion-slide>      \n\n    	<ion-img width="120" height="120" src="./assets/imgs/shop1-fiona-treadwell-logo.jpg"></ion-img><br>\n\n    	Fiona Treadwell\n\n    	<!-- each image can link to specific shop/ product page-->\n\n    </ion-slide> \n\n\n\n    <ion-slide>  \n\n    	<ion-img width="120" height="120" src="./assets/imgs/shop2-floral-garage-logo.jpg"></ion-img> <br> 	\n\n    	Floral Garage\n\n    </ion-slide> \n\n\n\n    <ion-slide>    \n\n    	<ion-img width="120" height="120" src="./assets/imgs/shop3-angel-florist-logo.png"></ion-img> <br> 	      	\n\n    	Angel Florist\n\n    </ion-slide> \n\n\n\n    <ion-slide>      \n\n    	Shop 4\n\n    </ion-slide> \n\n  </ion-slides>\n\n\n\n  <h1>Featured Products</h1>\n\n  <ion-slides pager autoplay="10000" slidesPerView="2" loop>\n\n    <ion-slide>    \n\n    	<ion-img width="120" height="120" src="./assets/imgs/prdt1-Premium-Freestyle-Bouquet.jpg"></ion-img> <br> 	  \n\n    	Premium Freestyle Bouquet\n\n    </ion-slide> \n\n\n\n    <ion-slide>      \n\n    	<ion-img width="85" height="130" src="./assets/imgs/prdt2-Valentines-Day-bouquet.jpg"></ion-img> <br> 	  \n\n    	Valentine\'s Day Bouquet\n\n    </ion-slide> \n\n\n\n    <ion-slide>      \n\n    	<ion-img width="120" height="120" src="./assets/imgs/prdt3-choco-hamper.png"></ion-img> <br> 	  \n\n    	Chocolate Hamper\n\n    </ion-slide> \n\n\n\n    <ion-slide>      \n\n    	Product 4\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\vanessaloh\Documents\giftme-app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[236]);
//# sourceMappingURL=main.js.map