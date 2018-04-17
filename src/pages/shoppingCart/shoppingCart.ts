import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { DeliveryPage } from '../delivery/delivery';
import { LoginPage } from '../login/login';

//Provider
import { PromotionProvider } from '../../providers/promotion/promotion';

@Component({
  selector: 'page-shopingCart',
  templateUrl: 'shoppingCart.html',
})
export class ShoppingCartPage {

  errorMessage: string;

  isLogin: boolean;
  cartExists: boolean;
  products: any[] = [];
  subtotal: number;
  promoCode: string;
  discount: number;
  deliveryFee: number;
  total: number;
  appliedPromo: boolean = false;
  quantitySelected: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public promotionProvider: PromotionProvider) {
    this.isLogin=false;
    this.products = [];
    this.subtotal = 0;
    this.promoCode = "";
    this.discount = 0;
    this.deliveryFee = 10;
    this.total = 0;    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingCartPage');
    
    if (sessionStorage.getItem("isLogin") === null){
      this.navCtrl.push(LoginPage);
    } else {
      this.isLogin = true;
      
      //if there are items in products in cart
      if (sessionStorage.getItem("Cart") != null && JSON.parse(sessionStorage.getItem("Cart"))[0] != null) {      
          this.cartExists = true;
          
          let sessionStorageItems = JSON.parse(sessionStorage.getItem("Cart"));
          console.log(sessionStorageItems);

          //place sessionStorage cart products into product array
          for (var i = 0; i < sessionStorageItems.length; i++){
            let currentItem = sessionStorageItems[i];
            this.products.push(currentItem);
          }
          console.log("Product", this.products[0]); 
          
          this.calculateSubtotal();
          if (this.subtotal >= 40){
            this.deliveryFee = 0;     
          }
          this.calculateTotal();
      }
    }
  }

  removeProduct(productId: number){
    console.log("productId in remove method", productId);
    for (var i =0; i< this.products.length; i++){
      console.log("products[i].product.productId", this.products[i].productId);
      if (this.products[i].product.productId == productId){        
        this.products.splice(i,1); //remove 1 item at index i
        console.log(this.products[i]);
      }
    }
    
    let sessionStorageItems = JSON.parse(sessionStorage.getItem("Cart"));
    console.log(sessionStorageItems);

    let productName = 0;
    for (var j=0; j< sessionStorageItems.length; j++){
      console.log(sessionStorageItems[j].product.productId);
      if (sessionStorageItems[j].product.productId === productId){
                
        productName = sessionStorageItems[j].product.productName;
        sessionStorageItems.splice(j,1);
        console.log("after remove: SessionStorageItems", sessionStorageItems);
        sessionStorage.setItem("Cart", JSON.stringify(sessionStorageItems));
      }
    }

    let alert = this.alertCtrl.create(
      {title: "Remove Product",
      subTitle: productName + " has been removed from Cart successfully",
      buttons: ['OK']
    });
    alert.present();
    if (sessionStorage.getItem("Cart") == null || JSON.parse(sessionStorage.getItem("Cart"))[0] == null) {      
      console.log(JSON.parse(sessionStorage.getItem("Cart"))[0]);
      this.cartExists = false;
      console.log("cartExists?",this.cartExists);
      sessionStorage.removeItem("Cart");
    }
    this.calculateSubtotal();
    this.calculateTotal();    
    
  }


  applyPromo(promoCode: string){
    if (!this.appliedPromo){
      this.promotionProvider.retrievePromotionByPromoCode(promoCode).subscribe(
        response => {
          this.discount = response.promotion.discount;
          this.calculateSubtotal();
          this.calculateTotal();
          let alert = this.alertCtrl.create(
            {title: "Apply Promo Code",
            subTitle: promoCode + " has been applied for a discount of $" + this.discount,
            buttons: ['OK']
          });
          alert.present();
          this.appliedPromo = true;
        },
        error => {
          
          this.errorMessage = "HTTP" + error.status + ": " + error.error.message;

          this.discount = 0;
          this.calculateSubtotal();          

          let alert = this.alertCtrl.create(
            {title: "Opps, this code is not valid. Please try again",          
            buttons: ['OK']
            });
            alert.present();          
        }
      )
    } else {
      let alert = this.alertCtrl.create(
        {title: "Apply Promo Code",
        subTitle: "Promo Code has already been Applied!",
        buttons: ['OK']
      });
      alert.present();      
    }
  }

  calculateSubtotal(){

  let subtotal = 0;

  for (var i=0; i< this.products.length; i++){
    let currentProduct = this.products[i];

    console.log(currentProduct);      
    subtotal += currentProduct.product.price * currentProduct.quantityInCart;

    console.log("SUBTOTAL", subtotal);
    this.subtotal = subtotal;

    }
    this.subtotal -= this.discount;      
  }
  
  calculateTotal(){
    this.total = this.subtotal + this.deliveryFee;
  }

  updateQuantity(productId: number){
    console.log("productId ", productId);
    //updateQuantity
    for (var i =0; i< this.products.length; i++){
      console.log("product[i].productId ", this.products[i].product.productId);
      if (this.products[i].product.productId === productId){        

        console.log("CurrentQuantityInCart", this.products[i].quantityInCart);

      }
    }
    let sessionStorageItems = JSON.parse(sessionStorage.getItem("Cart"));

    for (var j=0; j< sessionStorageItems.length; j++){      
      if (sessionStorageItems[j].product.productId === productId){
        
        sessionStorage.setItem("Cart", JSON.stringify(sessionStorageItems));
      }
    }    
    console.log("edited quantity", sessionStorageItems);
    this.calculateSubtotal();
    this.calculateTotal();
  }

  buttonTapped(event, page) {
    sessionStorage.setItem("PromoCode", this.promoCode);
    console.log(sessionStorage);
  	this.navCtrl.push(DeliveryPage, page);
  }

}