import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ProfilePage } from '../pages/profile/profile';
import { ViewTransactionsPage } from '../pages/viewTransactions/viewTransactions';
import { ShopsPage } from '../pages/shops/shops';
import { ShopIndivPage } from '../pages/shop-indiv/shop-indiv';
import { ProductCatPage } from '../pages/product-cat/product-cat';
import { ProductIndivPage } from '../pages/product-indiv/product-indiv';
import { ShoppingCartPage } from '../pages/shoppingCart/shoppingCart';
import { PaymentPage } from '../pages/payment/payment';
import { DeliveryPage } from '../pages/delivery/delivery';
import { LogoutPage } from '../pages/logout/logout';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    ViewTransactionsPage,
    ShopsPage,
    ShopIndivPage,
    ProductCatPage,
    ProductIndivPage,
    ShoppingCartPage,
    PaymentPage,
    DeliveryPage,
    LogoutPage
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
    RegisterPage,
    ProfilePage,
    ViewTransactionsPage,
    ShopsPage,
    ShopIndivPage,
    ProductCatPage,
    ProductIndivPage,
    ShoppingCartPage,
    PaymentPage,
    DeliveryPage,
    LogoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
