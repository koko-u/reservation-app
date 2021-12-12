import { Component, Input, OnInit } from '@angular/core'
import { Product } from '../../models/product.model'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'res-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  /**
   * the product display in the component
   * @private
   */
  private _product: Product | undefined
  get product(): Product {
    if (this._product === undefined) {
      throw new Error()
    }
    return this._product
  }
  @Input()
  set product(value: Product) {
    this._product = value
  }

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  async navigateToDetailPage() {
    await this.router.navigate([this.product.id], { relativeTo: this.route })
  }
}
