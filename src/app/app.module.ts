import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule } from 'ionic-angular';
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
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { ReviewPage } from '../pages/review/review';
import { CatConfectioneryPage } from '../pages/category-confectionery/category-confectionery';
import { CatFlowersPage } from '../pages/category-flowers/category-flowers';
import { CatPlushiesPage } from '../pages/category-plushies/category-plushies';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { ProductProvider } from '../providers/product/product';
import { UserProvider } from '../providers/user/user';
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
    ChangePasswordPage,
    ReviewPage,
    CatConfectioneryPage,
    CatFlowersPage,
    CatPlushiesPage,
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
    ConfirmTransactionPage,
    ChangePasswordPage,
    ReviewPage,
    CatConfectioneryPage,
    CatFlowersPage,
    CatPlushiesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //{provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductProvider,
    UserProvider,
    Api
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {}
