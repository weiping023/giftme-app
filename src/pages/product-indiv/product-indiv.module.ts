import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ProductIndivPage } from './product-indiv';

@NgModule({
  declarations: [
    ProductIndivPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductIndivPage),
    TranslateModule.forChild()
  ],
  exports: [
    ProductIndivPage
  ]
})
export class ProductIndivPageModule { }
