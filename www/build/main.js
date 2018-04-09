webpackJsonp([2],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductIndivPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shoppingCart_shoppingCart__ = __webpack_require__(26);
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
    ProductIndivPage.prototype.cartTapped = function (event, page) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__shoppingCart_shoppingCart__["a" /* ShoppingCartPage */], page);
    };
    ProductIndivPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-product-indiv',template:/*ion-inline-start:"C:\Users\vanessaloh\Documents\giftme-ionic\src\pages\product-indiv\product-indiv.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Product: Individual Page</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-left color="light" (click)="cartTapped($event, page)">\n\n            <ion-icon name="cart"></ion-icon>\n\n            Cart\n\n          </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<ion-img width="120" height="120" src="./assets/imgs/shop1-fiona-treadwell-logo.jpg"></ion-img><br>\n\n\n\n	<p>Product Name: </p>\n\n	<p>Product Description: </p>\n\n	<p>Product Price: </p>\n\n	<p>Select Quantity: </p>\n\n\n\n	<button ion-button color="primary" outline>Add to Cart</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\vanessaloh\Documents\giftme-ionic\src\pages\product-indiv\product-indiv.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProductIndivPage);
    return ProductIndivPage;
}());

//# sourceMappingURL=product-indiv.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(47);
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
        // The account fields for the signup form.  
        this.account = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            phoneNum: '',
        };
        this.submitted = false;
    }
    SignupPage.prototype.signup = function (signupForm) {
        var _this = this;
        this.submitted = true;
        if (signupForm.valid) {
            //need to push to backend!
            var toast = this.toastCtrl.create({
                message: 'Sign up is Successful!',
                cssClass: 'toast',
                duration: 3000,
            });
            toast.present();
            // Attempt to signup in through our User service
            this.user.signup(this.account).subscribe(function (resp) {
                console.log('signup worked');
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
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\vanessaloh\Documents\giftme-ionic\src\pages\signup\signup.html"*/'<ion-header>      \n\n  <ion-navbar color="dark">\n\n    <ion-title>Sign Up</ion-title>\n\n  </ion-navbar>  \n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <form #signupForm="ngForm" (ngSubmit)="signup(signupForm)">\n\n\n\n      <div>     \n\n        <div *ngIf="inemail.invalid && (inemail.dirty || inemail.touched || submitted)" class="errorText">\n\n          <div *ngIf="inemail.errors.required">\n\n            Email is required.\n\n          </div>\n\n          <div *ngIf="inemail.errors.minlength">\n\n            Email must be at least 4 characters long.\n\n          </div>\n\n          <div *ngIf="inemail.errors.maxlength">\n\n            Email cannot exceed 50 characters.\n\n          </div>\n\n          <div *ngIf="inemail.errors?.email">\n\n            Email must be valid.\n\n          </div>\n\n        </div>\n\n        \n\n        <div *ngIf="inpassword.invalid && (inpassword.dirty || inpassword.touched || submitted)" class="errorText">\n\n          <div *ngIf="inpassword.errors.required">\n\n            Password is required.\n\n          </div>\n\n          <div *ngIf="inpassword.errors.minlength">\n\n            Password must be at least 4 characters long.\n\n          </div>\n\n          <div *ngIf="inpassword.errors.maxlength">\n\n            Password cannot exceed 32 characters.\n\n          </div>\n\n        </div>\n\n        \n\n        <div *ngIf="signupErrorMessage" class="errorText">\n\n          {{signupErrorMessage}}\n\n        </div>        \n\n        \n\n      </div>\n\n      \n\n    <ion-list>          \n\n\n\n      <ion-item>\n\n        <ion-label floating>{{ \'Email\'}}</ion-label>\n\n        <ion-input type="email" [(ngModel)]="account.email" name="email" minlength="4" maxlength="32" required="true" \n\n        email #inemail="ngModel"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>{{ \'Password\' }}</ion-label>\n\n        <ion-input type="password" [(ngModel)]="account.password" name="password" minlength="4" maxlength="32" required="true" #inpassword="ngModel"></ion-input>\n\n      </ion-item>\n\n\n\n      <div style="padding: 13px">\n\n        <h4>Profile Details</h4>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label fixed>{{ \'First Name\'}}</ion-label>\n\n        <ion-input type="text" placeholder="Eg. firstname" [(ngModel)]="account.firstname" name="firstName" required="true"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label fixed>{{ \'Last Name\'}}</ion-label>\n\n        <ion-input type="text" placeholder="Eg. lastname" [(ngModel)]="account.lastname" name="lastName" required="true"></ion-input>\n\n      </ion-item>                  \n\n\n\n      <ion-item>\n\n        <ion-label fixed>{{ \'Contact\' }}</ion-label>\n\n        <ion-input type="text" placeholder="Eg. 901234567" [(ngModel)]="account.phoneNum" name="phoneNum" length="8" required="true"></ion-input>\n\n      </ion-item> <br/>\n\n\n\n      <div>\n\n        <button type="submit" ion-button outline color="primary">{{ \'Sign Up\' }}</button>\n\n      </div>\n\n\n\n    </ion-list>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\vanessaloh\Documents\giftme-ionic\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/product-indiv/product-indiv.module": [
		292,
		0
	],
	"../pages/signup/signup.module": [
		293,
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
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_payment__ = __webpack_require__(159);
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
    function DeliveryPage(navCtrl, navParams, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.submitted = false;
        this.deliveryUpdated = false;
    }
    DeliveryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DeliveryPage');
        if (sessionStorage.getItem("deliveryUpdated") == "true") {
            this.deliveryUpdated = true;
        }
        this.unitNum = sessionStorage.getItem("unitNum");
        this.streetName = sessionStorage.getItem("streetName");
        this.postalCode = sessionStorage.getItem("postalCode");
        this.datetime = sessionStorage.getItem("datetime");
    };
    DeliveryPage.prototype.updateDelivery = function (deliveryForm) {
        this.submitted = true;
        if (deliveryForm.valid) {
            this.deliveryUpdated = true;
            this.unitNum = unitNum;
            this.streetName = streetName;
            this.postalCode = postalCode;
            this.datetime = datetime;
            sessionStorage.setItem("unitNum", this.unitNum);
            sessionStorage.setItem("streetName", this.streetName);
            sessionStorage.setItem("postalCode", this.postalCode);
            sessionStorage.setItem("datetime", this.datetime);
            sessionStorage.setItem("deliveryUpdated", "true");
            var toast = this.toastCtrl.create({
                message: 'Delivery Details Confirmed',
                cssClass: 'toast',
                duration: 3000
            });
        }
        else {
            var alert = this.alertCtrl.create({
                title: 'Invalid Delivery Details',
                subTitle: '',
                buttons: ['OK']
            });
            alert.present();
        }
    };
    DeliveryPage.prototype.buttonTapped = function (event, page) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payment_payment__["a" /* PaymentPage */], page);
    };
    DeliveryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-delivery',template:/*ion-inline-start:"C:\Users\vanessaloh\Documents\giftme-ionic\src\pages\delivery\delivery.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle color="dark">\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>  \n\n    <ion-title>Delivery</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding> \n\n    <div *ngIf="!deliveryUpdated">\n\n        <form #deliveryForm="ngForm" (ngSubmit)="updateDelivery(deliveryForm)">\n\n            <div>\n\n                <div *ngIf="inunitnum.invalid && (inunitnum.dirty || inunitnum.touched || submitted)" class="errorText">\n\n                    <div *ngIf="inunitnum.errors.required">\n\n                        Unit number is required.\n\n                    </div>\n\n                    <div *ngIf="inunitnum.errors.minlength">\n\n                        Unit number must be at least 4 characters long.\n\n                    </div>\n\n                    <div *ngIf="inunitnum.errors.maxlength">\n\n                        Unit number cannot exceed 50 characters.\n\n                    </div>\n\n                </div>\n\n\n\n                <div *ngIf="instreetname.invalid && (instreetname.dirty || instreetname.touched || submitted)" class="errorText">\n\n                    <div *ngIf="instreetname.errors.required">\n\n                        Street name is required.\n\n                    </div>\n\n                    <div *ngIf="instreetname.errors.minlength">\n\n                        Street name must be at least 4 characters long.\n\n                    </div>\n\n                    <div *ngIf="instreetname.errors.maxlength">\n\n                        Street name cannot exceed 70 characters.\n\n                    </div>\n\n                </div>\n\n\n\n                <div *ngIf="inpostalcode.invalid && (inpostalcode.dirty || inpostalcode.touched || submitted)" class="errorText">\n\n                    <div *ngIf="inpostalcode.errors.required">\n\n                        Postal code is required.\n\n                    </div>\n\n                    <div *ngIf="inpostalcode.errors.minlength">\n\n                        Street name must be 6 characters long.\n\n                    </div>\n\n                    <div *ngIf="inpostalcode.errors.maxlength">\n\n                        Street name must be 6 characters long.\n\n                    </div>\n\n                </div>\n\n\n\n                <div *ngIf="indatetime.invalid && (indatetime.dirty || indatetime.touched || submitted)" class="errorText">\n\n                    <div *ngIf="indatetime.errors.required">\n\n                        Date and time are required.\n\n                    </div>\n\n                </div>\n\n\n\n                <div *ngIf="updateDeliveryErrorMessage" class="errorText">\n\n                    {{updateDeliveryErrorMessage}}\n\n                </div>\n\n            </div>\n\n\n\n            <ion-list>\n\n                <ion-list-header>\n\n                    Unit Number\n\n                </ion-list-header>\n\n                <ion-item>\n\n                    <ion-input type="text" placeholder="Eg. #06-01" id="unitnum" name="unitnum" [(ngModel)]="unitnum" minlength="4" maxlength="32" required="true" #inunitnum="ngModel"></ion-input>\n\n                </ion-item>\n\n\n\n                <ion-list-header>\n\n                    Street Name\n\n                </ion-list-header>\n\n                <ion-item>\n\n                    <ion-input type="text" placeholder="Eg. Orchard Road" id="streetname" name="streetname" [(ngModel)]="streetname" minlength="4" maxlength="70" required="true" #instreetname="ngModel"></ion-input>\n\n                </ion-item>\n\n\n\n                <ion-list-header>\n\n                    Postal Code\n\n                </ion-list-header>\n\n                <ion-item>\n\n                    <ion-input type="text" placeholder="Eg. 123456" id="postalcode" name="postalcode" [(ngModel)]="postalcode" minlength="6" maxlength="6" required="true" #inpostalcode="ngModel"></ion-input>\n\n                </ion-item>\n\n            </ion-list>\n\n\n\n            <ion-list>\n\n                <ion-list-header>\n\n                    Date and Time\n\n                </ion-list-header>\n\n                <ion-item>\n\n                    <ion-label>Select Date Time</ion-label>\n\n                    <ion-datetime displayFormat="DD/MMMM/YYYY h:mm A" pickerFormat="DD MM YYYY h mm A" type = "text" min = "2018" max = "2018-12-31" id = "datetime" name = "datetime" [(ngModel)]="dateTime" required = "true" #indatetime="ngModel"></ion-datetime>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <button type="submit" ion-button outline>\n\n                        Submit\n\n                    </button>                 \n\n                </ion-item> \n\n            </ion-list>\n\n        </form>\n\n    </div>\n\n\n\n    <div *ngIf="deliveryUpdated">\n\n        <h4>Delivery Details Confirmed</h4>\n\n        <p>Address: {{unitNum}} {{streetName}} {{postalCode}}</p>\n\n        <p>Date and Time: {{datetime}}</p>\n\n        <p>Delivered By: Mr Jack Ma</p>\n\n        <p>Contact Number: 90909090</p>\n\n        <button ion-button color="primary" outline (click)="buttonTapped($event, page)">Make Payment</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\vanessaloh\Documents\giftme-ionic\src\pages\delivery\delivery.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _d || Object])
    ], DeliveryPage);
    return DeliveryPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=delivery.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_transaction_confirm_transaction__ = __webpack_require__(160);
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
    PaymentPage.prototype.buttonTapped = function (event, page) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__confirm_transaction_confirm_transaction__["a" /* ConfirmTransactionPage */], page);
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"C:\Users\vanessaloh\Documents\giftme-ionic\src\pages\payment\payment.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle color="dark">\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>  \n\n    <ion-title>Payment</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<!-- 	<div *ngIf="!isPaid">\n\n		<form #paymentForm="ngForm" (ngSubmit)="pay(paymentForm">\n\n			<div>\n\n				<div *ngIf="inemail.invalid && (inemail.dirty || inemail.touched || submitted)" class="errorText">\n\n					<div *ngIf="inemail.errors.required">\n\n						Email is required.\n\n					</div>\n\n					<div *ngIf="inemail.errors.minlength">\n\n						Email must be at least 4 characters long.\n\n					</div>\n\n					<div *ngIf="inemail.errors.maxlength">\n\n						Email cannot exceed 50 characters.\n\n					</div>\n\n					<div *ngIf="inemail.errors?.email">\n\n						Email must be valid.\n\n					</div>\n\n				</div>\n\n			</div>\n\n		</form>\n\n	</div> -->\n\n\n\n	<h4>Card Details</h4>\n\n	<ion-list>\n\n		<ion-list-header>\n\n            Card Holder Name\n\n        </ion-list-header>\n\n        <ion-item>\n\n            <ion-input type="text" placeholder="Full Name on Card"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-list-header>\n\n            Card Number\n\n        </ion-list-header>\n\n        <ion-item>\n\n            <ion-input type="text" placeholder="16-digit Card Number"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-list-header>\n\n            Expiry Date\n\n        </ion-list-header>\n\n        <ion-item>\n\n  			<ion-label>Date</ion-label>\n\n  			<ion-datetime displayFormat="MM/YYYY" pickerFormat="MMMM YYYY"></ion-datetime>\n\n		</ion-item>\n\n\n\n		<ion-list-header>\n\n            CVC\n\n        </ion-list-header>\n\n        <ion-item>\n\n            <ion-input type="text" placeholder="3-digit Number on the back of the Card"></ion-input>\n\n        </ion-item>\n\n\n\n        <h4>Billing Address</h4>\n\n        <ion-list-header>\n\n            Unit Number\n\n        </ion-list-header>\n\n        <ion-item>\n\n            <ion-input type="text" placeholder="Eg. #06-01"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-list-header>\n\n            Street Name\n\n        </ion-list-header>\n\n        <ion-item>\n\n            <ion-input type="text" placeholder="Eg. Orchard Road"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-list-header>\n\n            Postal Code\n\n        </ion-list-header>\n\n        <ion-item>\n\n            <ion-input type="text" placeholder="Eg. 123456"></ion-input>\n\n        </ion-item>\n\n\n\n        <h4>Promo Code</h4>\n\n        <ion-item>\n\n        	<ion-input type="text" placeholder="Eg. ABC123"></ion-input>\n\n        </ion-item>\n\n	</ion-list>\n\n	<button ion-button color="primary" outline (click)="buttonTapped($event, page)">Confirm Payment</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\vanessaloh\Documents\giftme-ionic\src\pages\payment\payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
 * Generated class for the ConfirmTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfirmTransactionPage = /** @class */ (function () {
    function ConfirmTransactionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConfirmTransactionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmTransactionPage');
    };
    ConfirmTransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-confirm-transaction',template:/*ion-inline-start:"C:\Users\vanessaloh\Documents\giftme-ionic\src\pages\confirm-transaction\confirm-transaction.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle color="dark">\n          <ion-icon name="menu"></ion-icon>\n      </button>  \n    <ion-title>Transaction Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<button ion-button color="primary" outline>Confirm</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\vanessaloh\Documents\giftme-ionic\src\pages\confirm-transaction\confirm-transaction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ConfirmTransactionPage);
    return ConfirmTransactionPage;
}());

//# sourceMappingURL=confirm-transaction.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(162);
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

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(117);
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

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(113);
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\vanessaloh\Documents\giftme-ionic\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <button ion-button menuToggle colour="dark">\n\n    	<ion-icon name="menu"></ion-icon>\n\n    </button>      \n\n    <ion-title>Login</ion-title>    \n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<div *ngIf="!isLogin">		\n\n		\n\n		<form #loginForm="ngForm" (ngSubmit)="login(loginForm)" >	\n\n			\n\n			<div>			\n\n				<div *ngIf="inemail.invalid && (inemail.dirty || inemail.touched || submitted)" class="errorText">\n\n					<div *ngIf="inemail.errors.required">\n\n						Email is required.\n\n					</div>\n\n					<div *ngIf="inemail.errors.minlength">\n\n						Email must be at least 4 characters long.\n\n					</div>\n\n					<div *ngIf="inemail.errors.maxlength">\n\n						Email cannot exceed 50 characters.\n\n					</div>\n\n					<div *ngIf="inemail.errors?.email">\n\n						Email must be valid.\n\n					</div>\n\n				</div>\n\n				\n\n				<div *ngIf="inpassword.invalid && (inpassword.dirty || inpassword.touched || submitted)" class="errorText">\n\n					<div *ngIf="inpassword.errors.required">\n\n						Password is required.\n\n					</div>\n\n					<div *ngIf="inpassword.errors.minlength">\n\n						Password must be at least 4 characters long.\n\n					</div>\n\n					<div *ngIf="inpassword.errors.maxlength">\n\n						Password cannot exceed 32 characters.\n\n					</div>\n\n				</div>\n\n				\n\n				<div *ngIf="loginErrorMessage" class="errorText">\n\n					{{loginErrorMessage}}\n\n				</div>				\n\n				\n\n			</div>\n\n\n\n			<ion-list>\n\n				<ion-item>\n\n					<ion-label fixed>Email</ion-label>\n\n					<ion-input type="email" placeholder="Eg. test@gmail.com" id="email" name="email" [(ngModel)]="email" minlength="4" maxlength="32" required="true" email #inemail="ngModel"></ion-input>\n\n				</ion-item>\n\n\n\n				<ion-item>\n\n					<ion-label fixed>Password</ion-label>\n\n					<ion-input type="password" placeholder="Eg. password" id="password" name="password" [(ngModel)]="password" minlength="4" maxlength="32" required="true" #inpassword="ngModel"></ion-input>\n\n				</ion-item>\n\n								\n\n				<ion-item>\n\n					<div align="center">\n\n						<button type="submit" ion-button outline>\n\n							Login\n\n						</button>\n\n						<button ion-button outline (click)="register()"> \n\n							Sign Up\n\n						</button>					\n\n					</div>\n\n				</ion-item>				\n\n			</ion-list>\n\n\n\n		</form>\n\n	</div>\n\n	\n\n	<div *ngIf="isLogin">\n\n		<h3>Welcome Back!</h3>\n\n		You are login as {{firstName}} {{lastName}}\n\n\n\n		<button ion-button align="center" (click)="logout()">\n\n			Log out\n\n		</button>\n\n	</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\vanessaloh\Documents\giftme-ionic\src\pages\login\login.html"*/,
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

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shoppingCart_shoppingCart__ = __webpack_require__(26);
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
    function ProfilePage(navCtrl, navParams, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.submitted = false;
        this.isUpdated = false;
    }
    ProfilePage.prototype.cartTapped = function (event, page) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__shoppingCart_shoppingCart__["a" /* ShoppingCartPage */], page);
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
        if (sessionStorage.getItem("isUpdated") === "true") {
            this.isUpdated = true;
        }
    };
    ProfilePage.prototype.updateProfile = function (updateProfileForm) {
        this.submitted = true;
        if (updateProfileForm.valid) {
            this.isUpdated = true;
            sessionStorage.setItem("firstName", this.firstName);
            sessionStorage.setItem("lastName", this.lastName);
            sessionStorage.setItem("password", this.password);
            sessionStorage.setItem("isUpdated", "true");
            var toast = this.toastCtrl.create({
                message: 'Details updated successfully',
                cssClass: 'toast',
                duration: 3000
            });
            toast.present();
        }
        else {
            var alert = this.alertCtrl.create({
                title: 'Profile',
                subTitle: 'Invalid profile details',
                buttons: ['OK']
            });
            alert.present();
        }
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\vanessaloh\Documents\giftme-ionic\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <button ion-button menuToggle colour="dark">\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>  \n\n    <ion-title>Manage Profile</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-left color="light" (click)="cartTapped($event, page)">\n\n            <ion-icon name="cart"></ion-icon>\n\n            Cart\n\n          </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding> \n\n<h4> Profile Details </h4>\n\n\n\n  <div *ngIf="!isUpdated">\n\n    <form #updateProfileForm="ngForm" (ngSubmit)="updateProfile(updateProfileForm)">\n\n      <div>\n\n        <div *ngIf="(infirstname.dirty || infirstname.touched || submitted)" class="errorText">\n\n          <div *ngIf="infirstname.errors.minlength">\n\n            First Name must be at least 3 characters long.\n\n          </div>\n\n          <div *ngIf="infirstname.errors.maxlength">\n\n            First Name cannot exceed 32 characters.\n\n          </div>\n\n        </div>\n\n\n\n        <div *ngIf="(inlastname.dirty || inlastname.touched || submitted)" class="errorText">\n\n          <div *ngIf="inlastname.errors.minlength">\n\n            Last Name must be at least 3 characters long.\n\n          </div>\n\n          <div *ngIf="inlastname.errors.maxlength">\n\n            Last Name cannot exceed 32 characters.\n\n          </div>\n\n        </div>\n\n\n\n        <div *ngIf="(inmobilenum.dirty || inmobilenum.touched || submitted)" class="errorText">\n\n          <div *ngIf="inmobilenum.errors.minlength">\n\n            Mobile number must be 8 characters long.\n\n          </div>\n\n          <div *ngIf="inmobilenum.errors.maxlength">\n\n            Mobile number must be 8 characters long.\n\n          </div>\n\n        </div>\n\n\n\n        <div *ngIf="incurrpassword.invalid && (incurrpassword.dirty || incurrpassword.touched || submitted)" class="errorText">\n\n          <div *ngIf="incurrpassword.errors.required">\n\n            Password is required.\n\n          </div>\n\n          <div *ngIf="incurrpassword.errors.minlength">\n\n            Password must be at least 4 characters long.\n\n          </div>\n\n          <div *ngIf="incurrpassword.errors.maxlength">\n\n            Password cannot exceed 32 characters.\n\n          </div>\n\n        </div>\n\n\n\n        <div *ngIf="innewpassword.invalid && (innewpassword.dirty || innewpassword.touched || submitted)" class="errorText">\n\n          <div *ngIf="innewpassword.errors.required">\n\n            Password is required.\n\n          </div>\n\n          <div *ngIf="innewpassword.errors.minlength">\n\n            Password must be at least 4 characters long.\n\n          </div>\n\n          <div *ngIf="innewpassword.errors.maxlength">\n\n            Password cannot exceed 32 characters.\n\n          </div>\n\n        </div>\n\n\n\n        <div *ngIf="inverifypassword.invalid && (inverifypassword.dirty || inverifypassword.touched || submitted)" class="errorText">\n\n          <div *ngIf="inverifypassword.errors.required">\n\n            Password is required.\n\n          </div>\n\n          <div *ngIf="inverifypassword.errors.minlength">\n\n            Password must be at least 4 characters long.\n\n          </div>\n\n          <div *ngIf="inverifypassword.errors.maxlength">\n\n            Password cannot exceed 32 characters.\n\n          </div>\n\n        </div>\n\n\n\n        <div *ngIf="updateProfileErrorMessage" class="errorText">\n\n          {{updateProfileErrorMessage}}\n\n        </div>\n\n      </div>\n\n\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label fixed>First Name</ion-label>\n\n          <ion-input type="text" placeholder ="GiftMe" id="firstname" name="firstname" [(ngModel)]="firstname" minlength="3" maxlength="32" required="false" #infirstname="ngModel">\n\n          </ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label fixed>Last Name</ion-label>\n\n          <ion-input type="text" placeholder ="Admin" id="lastname" name="lastname" [(ngModel)]="lastname" minlength="3" maxlength="32" required="false" #inlastname="ngModel">\n\n          </ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label fixed>Contact</ion-label>\n\n          <ion-input type="text" placeholder ="12345678" id="mobilenum" name="mobilenum" [(ngModel)]="mobilenum" minlength="8" maxlength="8" required="false" #inmobilenum="ngModel">\n\n          </ion-input>\n\n        </ion-item>\n\n\n\n        <h4>Password</h4>\n\n\n\n        <ion-item>\n\n          <ion-label fixed>Current</ion-label>\n\n          <ion-input type="password" id="currpassword" name="currpassword" [(ngModel)]="currpassword" minlength="4" maxlength="32" required="false" #incurrpassword="ngModel"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label fixed>New</ion-label>\n\n          <ion-input type="password" id="newpassword" name="newpassword" [(ngModel)]="newpassword" minlength="4" maxlength="32" required="false" #innewpassword="ngModel"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label fixed>Verify</ion-label>\n\n          <ion-input type="password" id="verifypassword" name="verifypassword" [(ngModel)]="verifypassword" minlength="4" maxlength="32" required="false" #inverifypassword="ngModel"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <button type="submit" ion-button outline>\n\n            Save changes\n\n          </button>      \n\n        </ion-item> \n\n      </ion-list>\n\n    </form>\n\n  </div>\n\n\n\n  <div *ngIf="isUpdated">\n\n    <h3>Successfully Updated Profile</h3>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\vanessaloh\Documents\giftme-ionic\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], ProfilePage);
    return ProfilePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewTransactionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-viewTransactions',template:/*ion-inline-start:"C:\Users\vanessaloh\Documents\giftme-ionic\src\pages\viewTransactions\viewTransactions.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <button ion-button menuToggle colour="dark">\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>  \n\n    <ion-title>Profile</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-left color="light">\n\n            <ion-icon name="cart"></ion-icon>\n\n            Cart\n\n          </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<p>\n\n		Display all past transactions of all enum type\n\n	</p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\vanessaloh\Documents\giftme-ionic\src\pages\viewTransactions\viewTransactions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ViewTransactionsPage);
    return ViewTransactionsPage;
}());

//# sourceMappingURL=viewTransactions.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shoppingCart_shoppingCart__ = __webpack_require__(26);
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
    ShopsPage.prototype.cartTapped = function (event, page) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__shoppingCart_shoppingCart__["a" /* ShoppingCartPage */], page);
    };
    ShopsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-shops',template:/*ion-inline-start:"C:\Users\vanessaloh\Documents\giftme-ionic\src\pages\shops\shops.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <button ion-button menuToggle colour="dark">\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>  \n\n    <ion-title>Shops</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-left color="light" (click)="cartTapped($event, page)">\n\n            <ion-icon name="cart"></ion-icon>\n\n            Cart\n\n          </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<p>\n\n		Allow users to input Postal Code, then display shops based on similar location area.\n\n	</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\vanessaloh\Documents\giftme-ionic\src\pages\shops\shops.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ShopsPage);
    return ShopsPage;
}());

//# sourceMappingURL=shops.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_side_menu_redirect_events__ = __webpack_require__(289);
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
            selector: 'side-menu-content',template:/*ion-inline-start:"C:\Users\vanessaloh\Documents\giftme-ionic\src\pages\side-menu-content\side-menu-content.component.html"*/'<ion-list no-margin no-lines>\n\n    <ng-template ngFor let-option [ngForOf]="collapsableItems" let-i="index">\n\n\n\n        <!-- It is a simple option -->\n\n        <ng-template [ngIf]="!option.subItemsCount">\n\n            <ion-item class="option" [ngClass]="menuSettings?.showSelectedOption && option.selected ? menuSettings.selectedOptionClass : null" (tap)="select(option)" tappable>\n\n                <ion-icon *ngIf="option.iconName" [name]="option.iconName" item-left></ion-icon>\n\n                {{ option.displayName }} <ion-badge item-right *ngIf="option.badge | async as badgeNo">{{ badgeNo }}</ion-badge>\n\n            </ion-item>\n\n        </ng-template>\n\n\n\n        <!-- It has nested options -->\n\n        <ng-template [ngIf]="option.subItemsCount">\n\n\n\n            <ion-list no-margin class="accordion-menu">\n\n\n\n                <!-- Header -->\n\n                <ion-item class="header" [ngClass]="menuSettings?.showSelectedOption && option.selected ? menuSettings.selectedOptionClass : null" (tap)="toggleItemOptions(option)" tappable>\n\n                    <ion-icon [class.rotate]="option.expanded" class="header-icon" [name]="option.iconName || menuSettings.arrowIcon" item-left></ion-icon>\n\n                    {{ option.displayName }}\n\n                </ion-item>\n\n\n\n                <!-- Sub items -->\n\n                <div [style.height]="option.expanded ? ((itemHeight + 1) * option.subItemsCount) + \'px\' : \'0px\'" class="options">\n\n                    <ng-template ngFor let-item [ngForOf]="option.subOptions">\n\n                        <ion-item class="sub-option" [style.padding-left]="subOptionIndentation" [class.no-icon]="menuSettings?.indentSubOptionsWithoutIcons && !item.iconName" [ngClass]="menuSettings?.showSelectedOption && item.selected ? menuSettings.selectedOptionClass : null" tappable (tap)="select(item)">\n\n                            <ion-icon *ngIf="item.iconName" [name]="item.iconName" item-left></ion-icon>\n\n                            {{ item.displayName }}  <ion-badge item-right *ngIf="item.badge | async as badgeNo">{{ badgeNo }}</ion-badge>\n\n                        </ion-item>\n\n                    </ng-template>\n\n                </div>\n\n            </ion-list>\n\n\n\n        </ng-template>\n\n\n\n    </ng-template>\n\n</ion-list>'/*ion-inline-end:"C:\Users\vanessaloh\Documents\giftme-ionic\src\pages\side-menu-content\side-menu-content.component.html"*/,
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

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(245);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_viewTransactions_viewTransactions__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_shops_shops__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_shop_indiv_shop_indiv__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_product_cat_product_cat__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_product_indiv_product_indiv__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_shoppingCart_shoppingCart__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_payment_payment__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_delivery_delivery__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_confirm_transaction_confirm_transaction__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_user_user__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_api_api__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_side_menu_content_side_menu_content_component__ = __webpack_require__(210);
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
                __WEBPACK_IMPORTED_MODULE_17__pages_confirm_transaction_confirm_transaction__["a" /* ConfirmTransactionPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_side_menu_content_side_menu_content_component__["a" /* SideMenuContentComponent */]
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
                __WEBPACK_IMPORTED_MODULE_17__pages_confirm_transaction_confirm_transaction__["a" /* ConfirmTransactionPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                //{provide: ErrorHandler, useClass: IonicErrorHandler},
                //ProductProvider,
                __WEBPACK_IMPORTED_MODULE_20__providers_user_user__["a" /* User */],
                __WEBPACK_IMPORTED_MODULE_21__providers_api_api__["a" /* Api */]
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

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delivery_delivery__ = __webpack_require__(158);
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
    ShoppingCartPage.prototype.buttonTapped = function (event, page) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__delivery_delivery__["a" /* DeliveryPage */], page);
    };
    ShoppingCartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-shopingCart',template:/*ion-inline-start:"C:\Users\vanessaloh\Documents\giftme-ionic\src\pages\shoppingCart\shoppingCart.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <button ion-button menuToggle colour="dark">\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>  \n\n    <ion-title>Shopping Cart</ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<p>\n\n		Displays items in cart\n\n	</p>\n\n\n\n	<button ion-button color="primary" outline (click)="buttonTapped($event, page)">Select Delivery Details</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\vanessaloh\Documents\giftme-ionic\src\pages\shoppingCart\shoppingCart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ShoppingCartPage);
    return ShoppingCartPage;
}());

//# sourceMappingURL=shoppingCart.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_viewTransactions_viewTransactions__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_shops_shops__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_product_indiv_product_indiv__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_shoppingCart_shoppingCart__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_side_menu_content_side_menu_content_component__ = __webpack_require__(210);
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
        // Load options with nested items
        // -----------------------------------------------
        this.options.push({
            displayName: 'Profile',
            subItems: [
                {
                    iconName: 'person',
                    displayName: 'Manage Profile',
                    component: __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */]
                },
                {
                    iconName: 'basket',
                    displayName: 'View Transactions',
                    component: __WEBPACK_IMPORTED_MODULE_7__pages_viewTransactions_viewTransactions__["a" /* ViewTransactionsPage */]
                }
            ]
        });
        this.options.push({
            displayName: 'Product',
            subItems: [
                {
                    iconName: 'flower',
                    displayName: 'Flowers',
                    component: __WEBPACK_IMPORTED_MODULE_9__pages_product_indiv_product_indiv__["a" /* ProductIndivPage */] //to replace
                },
                {
                    iconName: 'basket',
                    displayName: 'Confectionery',
                    component: __WEBPACK_IMPORTED_MODULE_9__pages_product_indiv_product_indiv__["a" /* ProductIndivPage */] //to replace
                },
                {
                    iconName: 'basket',
                    displayName: 'Plushies',
                    component: __WEBPACK_IMPORTED_MODULE_9__pages_product_indiv_product_indiv__["a" /* ProductIndivPage */] //to replace
                }
            ]
        });
        this.options.push({
            displayName: 'Shop',
            subItems: [
                {
                    iconName: 'pin',
                    displayName: 'Location',
                    component: __WEBPACK_IMPORTED_MODULE_8__pages_shops_shops__["a" /* ShopsPage */]
                }
            ]
        });
        this.options.push({
            iconName: 'cart',
            displayName: 'Shopping Cart',
            component: __WEBPACK_IMPORTED_MODULE_10__pages_shoppingCart_shoppingCart__["a" /* ShoppingCartPage */]
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_11__pages_side_menu_content_side_menu_content_component__["a" /* SideMenuContentComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__pages_side_menu_content_side_menu_content_component__["a" /* SideMenuContentComponent */])
    ], MyApp.prototype, "sideMenu", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\vanessaloh\Documents\giftme-ionic\src\app\app.html"*/'<ion-menu [content]="content" (ionClose)="collapseMenuOptions()">\n\n  <ion-header>\n\n    <ion-toolbar color="secondary">\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n\n\n    <!-- Side Menu -->    \n\n    <side-menu-content [settings]="sideMenuSettings" [options]="options" (selectOption)="selectOption($event)"></side-menu-content>\n\n    \n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\vanessaloh\Documents\giftme-ionic\src\app\app.html"*/
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

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuRedirectEvent; });
// SideMenuRedirectEvent constant
var SideMenuRedirectEvent = 'sidemenu:redirect';
//# sourceMappingURL=side-menu-redirect-events.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopIndivPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shoppingCart_shoppingCart__ = __webpack_require__(26);
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
    ShopIndivPage.prototype.cartTapped = function (event, page) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__shoppingCart_shoppingCart__["a" /* ShoppingCartPage */], page);
    };
    ShopIndivPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-shop-indiv',template:/*ion-inline-start:"C:\Users\vanessaloh\Documents\giftme-ionic\src\pages\shop-indiv\shop-indiv.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Shop: Individual Page</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-left color="light" (click)="cartTapped($event, page)">\n\n            <ion-icon name="cart"></ion-icon>\n\n            Cart\n\n          </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<p>\n\n		Displays products from that particular shop\n\n	</p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\vanessaloh\Documents\giftme-ionic\src\pages\shop-indiv\shop-indiv.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ShopIndivPage);
    return ShopIndivPage;
}());

//# sourceMappingURL=shop-indiv.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shoppingCart_shoppingCart__ = __webpack_require__(26);
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
    ProductCatPage.prototype.cartTapped = function (event, page) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__shoppingCart_shoppingCart__["a" /* ShoppingCartPage */], page);
    };
    ProductCatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-product-cat',template:/*ion-inline-start:"C:\Users\vanessaloh\Documents\giftme-ionic\src\pages\product-cat\product-cat.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <button ion-button menuToggle colour="dark">\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>  \n\n    <ion-title>Product Category</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-left color="light" (click)="cartTapped($event, page)">\n\n            <ion-icon name="cart"></ion-icon>\n\n            Cart\n\n          </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<p>\n\n		Page list products 2 by 2 after users select a specific category\n\n	</p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\vanessaloh\Documents\giftme-ionic\src\pages\product-cat\product-cat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProductCatPage);
    return ProductCatPage;
}());

//# sourceMappingURL=product-cat.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shoppingCart_shoppingCart__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AlertController } from 'ionic-angular';
//import { ToastController } from 'ionic-angular';



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goToSlide = function () {
        this.slides.slideTo(2, 500);
    };
    HomePage.prototype.cartTapped = function (event, page) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__shoppingCart_shoppingCart__["a" /* ShoppingCartPage */], page);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\vanessaloh\Documents\giftme-ionic\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <button ion-button menuToggle colour="dark">\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>  \n\n    <ion-title>GiftMe</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-left color="light" (click)="cartTapped($event, page)">\n\n            <ion-icon name="cart"></ion-icon>\n\n            Cart\n\n          </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding> \n\n  \n\n  <h1>Featured Shops</h1>\n\n  <ion-slides pager slidesPerView="2" autoplay="10000" loop>  	\n\n    <ion-slide>      \n\n    	<ion-img width="120" height="120" src="./assets/imgs/shop1-fiona-treadwell-logo.jpg"></ion-img><br>\n\n    	Fiona Treadwell\n\n    	<!-- each image can link to specific shop/ product page-->\n\n    </ion-slide> \n\n\n\n    <ion-slide>  \n\n    	<ion-img width="120" height="120" src="./assets/imgs/shop2-floral-garage-logo.jpg"></ion-img> <br> 	\n\n    	Floral Garage\n\n    </ion-slide> \n\n\n\n    <ion-slide>    \n\n    	<ion-img width="120" height="120" src="./assets/imgs/shop3-angel-florist-logo.png"></ion-img> <br> 	      	\n\n    	Angel Florist\n\n    </ion-slide> \n\n\n\n    <ion-slide>      \n\n    	Shop 4\n\n    </ion-slide> \n\n  </ion-slides>\n\n\n\n  <h1>Featured Products</h1>\n\n  <ion-slides pager autoplay="10000" slidesPerView="2" loop>\n\n    <ion-slide>    \n\n    	<ion-img width="120" height="120" src="./assets/imgs/prdt1-Premium-Freestyle-Bouquet.jpg"></ion-img> <br> 	  \n\n    	Premium Freestyle Bouquet\n\n    </ion-slide> \n\n\n\n    <ion-slide>      \n\n    	<ion-img width="85" height="130" src="./assets/imgs/prdt2-Valentines-Day-bouquet.jpg"></ion-img> <br> 	  \n\n    	Valentine\'s Day Bouquet\n\n    </ion-slide> \n\n\n\n    <ion-slide>      \n\n    	<ion-img width="120" height="120" src="./assets/imgs/prdt3-choco-hamper.png"></ion-img> <br> 	  \n\n    	Chocolate Hamper\n\n    </ion-slide> \n\n\n\n    <ion-slide>      \n\n    	Product 4\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\vanessaloh\Documents\giftme-ionic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[240]);
//# sourceMappingURL=main.js.map