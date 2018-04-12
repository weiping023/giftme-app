import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ShoppingCartPage } from '../shoppingCart/shoppingCart';
import { NgForm } from '@angular/forms';

//Provider
import { ProductProvider } from '../../providers/product/product';

import { Product } from '../../entities/product';
import { CartProduct } from '../../entities/cartProduct';

@IonicPage()
@Component({
  selector: 'page-product-indiv',
  templateUrl: 'product-indiv.html',
})
export class ProductIndivPage {

  errorMessage: string;

  productId: number;
  productToView: Product;
  productToAddToCart: CartProduct;  

  cart: { quantity: number, skuCode: number, productName: String, productPrice: number } = {
    quantity: 0,
    skuCode: 0,
    productName: '',
    productPrice: 0
  };

  private addToCartErrorMessage: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public productProvider: ProductProvider,
              public toastCtrl: ToastController)
  {        
    this.productToView = new Product();
    this.productToAddToCart = new CartProduct;
    this.productId = navCtrl.get('productId');
  }

  ionViewDidLoad() {

    this.productId = parseInt(this.navController.getChild(params));

    console.log('ionViewDidLoad ProductIndivPage');
    this.productProvider.retrieveProduct(1).subscribe(
      response => {
        this.productToView = response.product

        this.productToAddToCart.product = this.productToView;
        this.productToAddToCart.quantityInCart = 1;
      },
      error => {
        this.errorMessage = "HTTP" + error.status + ": " + error.error.message;
      }
    );   
  }

  addToCart(){

    //array of products in cart stores in session storage
    let tempSessionStorage = []; 
    let cartTooFull = false;

    // Cart doesn't exist => Create Cart
    if (sessionStorage.getItem("Cart") === null) {
      tempSessionStorage[0] = this.productToAddToCart;
      sessionStorage.setItem("Cart", JSON.stringify(tempSessionStorage));      
    
      let toast = this.toastCtrl.create({
        message: 'Add to Cart Successful!',
        cssClass: 'toast',
        duration: 3000,
      });
      toast.present();             

    } else {
      // Cart already exists, retrieve the cart
      tempSessionStorage = (JSON.parse(sessionStorage.getItem("Cart")));

      let imaginaryCartQuantity = (JSON.parse(sessionStorage.getItem("Cart")));
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
        this.error("Product was not successfully added in cart - Not enough stock");
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

          this.success("Product has been added into cart");
        }
      }
    }

    // Modify the quantity of the object in product page (Can use same method to modify object options like color etc)
    increaseQuantity() {
      this.productToAddToCart.quantityInCart++;
    }

    decreaseQuantity() {
      if (this.productToAddToCart.quantityInCart !== 1) {
        this.productToAddToCart.quantityInCart--;
      }
    }  

  cartTapped(event, page) {
  	this.navCtrl.push(ShoppingCartPage, page);
  }
