import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';
import { ViewTransactionsPage } from '../pages/viewTransactions/viewTransactions';
import { ShopsPage } from '../pages/shops/shops';
import { ShopIndivPage } from '../pages/shop-indiv/shop-indiv';
import { ProductCatPage } from '../pages/product-cat/product-cat';
import { ProductIndivPage } from '../pages/product-indiv/product-indiv';
import { ShoppingCartPage } from '../pages/shoppingCart/shoppingCart';
import { PaymentPage } from '../pages/payment/payment';
import { DeliveryPage } from '../pages/delivery/delivery';
import { ConfirmTransactionPage } from '../pages/confirm-transaction/confirm-transaction';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//import { ProductProvider } from '../providers/product/product';
import { User } from '../providers/user/user';
import { Api } from '../providers/api/api';

// Custom components
import { SideMenuContentComponent } from '../pages/side-menu-content/side-menu-content.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ProfilePage,
    ViewTransactionsPage,
    ShopsPage,
    ShopIndivPage,
    ProductCatPage,
    ProductIndivPage,
    ShoppingCartPage,
    PaymentPage,
    DeliveryPage,
    ConfirmTransactionPage,
    SideMenuContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ProfilePage,
    ViewTransactionsPage,
    ShopsPage,
    ShopIndivPage,
    ProductCatPage,
    ProductIndivPage,
    ShoppingCartPage,
    PaymentPage,
    DeliveryPage,
    ConfirmTransactionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //{provide: ErrorHandler, useClass: IonicErrorHandler},
    //ProductProvider,
    User,
    Api
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {}
