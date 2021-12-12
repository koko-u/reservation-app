import { Component, OnDestroy, OnInit } from '@angular/core'
import { Product } from '../models/product.model'
import { mockProducts } from '../../data/mock-products'
import { Subscription } from 'rxjs'
import { ProductsService } from '../services/products.service'

@Component({
  selector: 'res-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = []

  private _productsSubscription: Subscription | undefined

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this._productsSubscription =
      this.productsService.productsUpdated$.subscribe(
        (products) => (this.products = products)
      )
    this.productsService.getAllProducts().subscribe()
  }
  ngOnDestroy() {
    if (this._productsSubscription) {
      this._productsSubscription.unsubscribe()
    }
  }
}
