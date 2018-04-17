import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { ShoppingCartPage } from '../shoppingCart/shoppingCart';
import { NgForm } from '@angular/forms';

//Provider
import { ProductProvider } from '../../providers/product/product';

import { Product } from '../../entities/product';
import { CartProduct } from '../../entities/cartProduct';
import { Shop } from '../../entities/shop';
import { LoginPage } from '../login/login';
import { ShopIndivPage } from '../shop-indiv/shop-indiv'

@Component({
  selector: 'page-product-indiv',
  templateUrl: 'product-indiv.html',
})
export class ProductIndivPage {

  errorMessage: string;

  productId: number;
  productToView: Product;
  productToAddToCart: CartProduct;     
  quantitySelected: string = "0";
  canAddToCart: boolean;
  shop: Shop;

  private addToCartErrorMessage: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public productProvider: ProductProvider,  
              public toastCtrl: ToastController,
              public alertCtrl: AlertController)
  {        
    this.productToView = new Product();
    this.productToAddToCart = new CartProduct();
    this.productId = this.navParams.get('productId');   
    this.canAddToCart = false;      
  }

  ionViewDidLoad() {    
    
    console.log('ionViewDidLoad ProductIndivPage');
    this.productProvider.retrieveProduct(this.productId).subscribe(
      response => {
        this.productToView = response.product
        this.productToAddToCart.product = this.productToView;  
        this.productToAddToCart.quantityInCart = 0;              
      },
      error => {
        this.errorMessage = "HTTP" + error.status + ": " + error.error.message;
      }
    );      
  }

  addToCart(){    
    
    this.productToAddToCart.quantityInCart = parseInt(this.quantitySelected);
    console.log("quantity to add to cart", this.productToAddToCart.quantityInCart)

    if ((this.productToAddToCart.quantityInCart) > this.productToView.quantityOnHand){
      let alert = this.alertCtrl.create(
        {
          title: 'Add Product to Cart',          
          subTitle: 'Product was not successfully added to cart - Not enough stock',
          buttons: ['OK']     
        });
        alert.present();
    } 

    else if (this.productToAddToCart.quantityInCart == 0){
      let alert = this.alertCtrl.create(
        {
          title: 'Add Product to Cart',
          subTitle: 'Please Select a Quantity!',
          cssClass:'buttonCss',
          buttons: ['OK']
        });
        alert.present();        
    } else {
      this.canAddToCart = true;
    }

    console.log(sessionStorage.getItem("isLogin"))
    if (this.canAddToCart){
      if (sessionStorage.getItem("isLogin") != null) {
        //array of products in cart stores in session storage
        let tempSessionStorage = []; 
        let cartTooFull = false;      

        // Cart doesn't exist => Create Cart      
        if (sessionStorage.getItem("Cart") === null) {
          console.log("cart exists?", sessionStorage.getItem("Cart"))
          tempSessionStorage[0] = this.productToAddToCart;
          sessionStorage.setItem("Cart", JSON.stringify(tempSessionStorage));                      
          
          console.log(tempSessionStorage[0]);
          let alert = this.alertCtrl.create(
          {
            title: 'Add Product to Cart',
            subTitle: 'Product has been added into cart!',
            cssClass:'buttonCss',
            buttons: ['OK']
          });
          alert.present();
        }     
        else {
          // Cart already exists, retrieve the cart
          tempSessionStorage = (JSON.parse(sessionStorage.getItem("Cart")));

          let imaginaryCartQuantity = (JSON.parse(sessionStorage.getItem("Cart")));
          console.log("Quantity already in cart", imaginaryCartQuantity.quantityInCart);
          console.log("Product to add to cart's quantity", this.productToAddToCart.quantityInCart);
          console.log("Imaginary cart quantity", imaginaryCartQuantity);

          for (var j = 0; j < imaginaryCartQuantity.length; j++) {
            if (imaginaryCartQuantity[j].product.skuCode === this.productToAddToCart.product.skuCode) {
              imaginaryCartQuantity = imaginaryCartQuantity[j];
              break;
            }
          }
          
          if ((imaginaryCartQuantity.quantityInCart + this.productToAddToCart.quantityInCart) > this.productToView.quantityOnHand) {       
            console.log("Cannot add anymore, not enough product in stock");        
            let alert = this.alertCtrl.create(
            {
              title: 'Add Product to Cart',
              subTitle: 'Product was not successfully added to cart - Not enough stock',
              buttons: ['OK']
            });
            
            alert.present();        
            cartTooFull = true;
          } else if (cartTooFull === false){
            
            let sameProductAdded = false;
            // check if this.productToView exists inside the array already
            // if it does, then ADD QUANTITY of productToView
            for (var i = 0; i < tempSessionStorage.length; i++) {

              if (this.productToAddToCart.product.skuCode === tempSessionStorage[i].product.skuCode) {
                // Product match
                let extraQty = this.productToAddToCart.quantityInCart;
    //            console.log("Extra qty", extraQty);
    //            console.log("Tempsession quantity", tempSessionStorage[i].quantityInCart);

                let tempQty = 0;
                tempQty = this.productToAddToCart.quantityInCart;
                tempSessionStorage[i].quantityInCart += this.productToAddToCart.quantityInCart;
    //            console.log("Temp session storage new quantity", tempSessionStorage[i].quantityInCart);

                //Override?
                sessionStorage.setItem("Cart", JSON.stringify(tempSessionStorage));

                sameProductAdded = true;
              }

            }

            if (!sameProductAdded) {
              tempSessionStorage.push(this.productToAddToCart);
              sessionStorage.setItem("Cart", JSON.stringify(tempSessionStorage));
            }

            let alert = this.alertCtrl.create(
            {
              title: 'Add Product to Cart',
              subTitle: 'Product has been added into cart!',
              cssClass:'buttonCss',
              buttons: ['OK']
            });
            
            alert.present();
          }
        }
      } else {
        let toast = this.toastCtrl.create({
          message: 'Error: Please Login to add Product to Cart',
          cssClass: 'toast',
          duration: 3000
        });
        toast.present();
        this.navCtrl.push(LoginPage);
      }
    }
  } //end of addToCart()
  
  redirectToShop(shopId: number){
            
    this.navCtrl.push(ShopIndivPage, {
      shopId
    });
  }
  cartTapped(event, page) {
  	this.navCtrl.push(ShoppingCartPage, page);
  }
}  
