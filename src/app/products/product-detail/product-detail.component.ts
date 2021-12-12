import { Component, OnInit } from '@angular/core'
import { ProductsService } from '../services/products.service'
import { ActivatedRoute } from '@angular/router'
import { concatMap, EMPTY, map } from 'rxjs'
import { Product } from '../models/product.model'

@Component({
  selector: 'res-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((paramMap) => paramMap.get('id')),
        concatMap((id) => {
          if (id === null) {
            return EMPTY
          } else {
            return this.productsService.getProductById(id)
          }
        })
      )
      .subscribe((product) => (this.product = product))
  }
}
