import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProductsComponent } from './products.component'
import { ProductListComponent } from './product-list/product-list.component'
import { ProductDetailComponent } from './product-detail/product-detail.component'

const products: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: ':id', component: ProductDetailComponent },
    ],
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(products)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
