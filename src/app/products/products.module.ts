import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProductListComponent } from './product-list/product-list.component'
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { ProductItemComponent } from './product-list/product-item/product-item.component'
import { ProductsService } from './services/products.service'
import { ProductsComponent } from './products.component'
import { ProductsRoutingModule } from './products-routing.module'

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductItemComponent,
    ProductsComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule],
  exports: [],
  providers: [ProductsService],
})
export class ProductsModule {}
